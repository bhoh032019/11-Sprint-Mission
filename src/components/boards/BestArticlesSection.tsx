import { useEffect, useState } from 'react';
import { getArticles } from '../../api/boardApi';
import useDimensions from '../../hooks/useDimensions';
import styles from '../../style/BestArticlesSection.module.css';

interface ArticleList {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
  writer: {
    id: number;
    nickname: string;
  };
}

const getPageSize = (width: number): number => {
  if (width < 768) {
    return 1; // Mobile viewport
  } else if (width < 1280) {
    return 2; // Tablet viewport
  } else {
    return 3; // Desktop viewport
  }
};

export default function BestArticlesSection() {
  const [articles, setArticles] = useState<ArticleList[] | null>(null);
  const [pageSize, setPageSize] = useState<number | null>(null);

  const viewWidth = useDimensions();

  useEffect(() => {
    if (viewWidth === 0) return;

    const newPageSize = getPageSize(viewWidth);

    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);

      const fetchBestArticles = async (size: number) => {
        try {
          const data = await getArticles(size);
          setArticles(data.list);
        } catch (error) {
          console.error('데이터를 불러오는데 실패 했습니다.', error);
        }
      };

      fetchBestArticles(newPageSize);
    }
  }, [viewWidth, pageSize]);

  return (
    <div className={styles['best-section']}>
      <div className={styles['best-title']}>베스트 게시글</div>
      {articles ? (
        <div className={styles['article-list']}>
          {articles.map((article) => (
            <div key={article.id} className={styles['article-item']}>
              <h2 className={styles['article-title']}>{article.title}</h2>
              <img
                src={`${article.image}`}
                width="100"
                height="100"
                alt="게시글 이미지"
              />
              <p className={styles['article-content']}>{article.content}</p>
              <div className={styles['article-footer']}>
                <span className={styles['article-writer']}>
                  작성자: {article.writer.nickname}
                </span>
                <span className={styles['article-likes']}>
                  좋아요: {article.likeCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>데이터를 불러오는 중...</div>
      )}
    </div>
  );
}

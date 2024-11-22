import { useEffect, useState } from 'react';
import styles from '../../style/AllArticlesSection.module.css';
import { getAllArticles } from '../../api/boardApi';
import Link from 'next/link';
import Image from 'next/image';
import Heart from '../../images/ic_heart.svg';
import SearchBar from '../SearchBar';
import router from 'next/router';
import DropdownMenu from '../DropdownMenu';
import { ArticleList, ArticleOrderBy } from '../types/articleTypes';

export default function AllArticlesSection() {
  const [articles, setArticles] = useState<ArticleList[] | null>(null);
  const [orderBy, setOrderBy] = useState<ArticleOrderBy>('recent');
  const [page, setPage] = useState(1);

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\. /g, '. ')
      .slice(0, -1); // 공백 제거
  };

  const handleSortSelection = (sortOption: ArticleSortOption) => {
    setOrderBy(sortOption);
  };

  const handleSearch = (searchKeyword: string) => {
    const query = { ...router.query };
    if (searchKeyword.trim()) {
      query.q = searchKeyword;
    } else {
      delete query.q; // Optional: 키워드가 빈 문자열일 때 URL에서 query string 없애주기
    }
    router.replace({
      pathname: router.pathname,
      query,
    });
  };

  useEffect(() => {
    {
      const fetchAllArticles = async () => {
        try {
          const data = await getAllArticles(page, orderBy);
          setArticles(data.list);
        } catch (error) {
          console.error('데이터를 불러오는데 실패 했습니다.', error);
        }
      };

      fetchAllArticles();
    }
  }, [orderBy]);

  return (
    <div>
      <div className={styles['all-section-header']}>
        <div className={styles['all-title']}>게시글</div>
        <Link className={styles['addArticlelink']} href="/addArticle">
          글쓰기
        </Link>
      </div>
      <div className={styles['all-section-header']}>
        <SearchBar onSearch={handleSearch} />
        <DropdownMenu
          onSelection={handleSortSelection}
          sortOptions={[
            { key: 'recent', label: '최신순' },
            { key: 'like', label: '인기순' },
          ]}
        />
      </div>
      {articles ? (
        <div className={styles['allarticle-list']}>
          {articles.map((article) => (
            <div key={article.id} className={styles['allarticle-item']}>
              <div className={styles['allarticle-body']}>
                <h2 className={styles['allarticle-title']}>{article.title}</h2>
                <Image
                  width={46}
                  height={46}
                  src={article.image || '/images/Img_home_02.png'}
                  alt="게시글 이미지"
                  className={styles['allarticle-image']}
                />
              </div>
              <div className={styles['allarticle-footer']}>
                <div className={styles['allarticle-info']}>
                  <span className={styles['allarticle-writer']}>
                    {article.writer.nickname}
                  </span>
                  <span className={styles['allarticle-updatedAt']}>
                    {formatDate(article.updatedAt)}
                  </span>
                </div>
                <span className={styles['allarticle-likes']}>
                  <Heart />
                  {article.likeCount}
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

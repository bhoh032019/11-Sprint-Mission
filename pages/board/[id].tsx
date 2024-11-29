import axiosInstance from '@/lib/axiosInstance';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Profile from '@public/svgs/ic_profile.svg';
import EmptyComment from '@public/svgs/Img_inquiry_empty.svg';
import SortIcon from '@public/svgs/ic_kebab.svg';
import styles from '@styles/BoardDetailPage.module.css';
import { getArticles } from '@pages/api/boardApi';
import { ArticleList } from '@/components/types/articleTypes';
import Heart from '@public/svgs/ic_heart.svg';

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
    image?: string;
  };
}

interface ArticlesSectionProps {
  initialArticle: ArticleList;
}

const INITIAL_ARTICLE = {
  id: 0,
  title: '',
  content: '',
  image: '',
  writer: { id: 0, nickname: '' },
  createdAt: '',
  updatedAt: '',
  likeCount: 0,
};

export default function BoardsThreadPage({
  initialArticle = INITIAL_ARTICLE,
}: ArticlesSectionProps) {
  const router = useRouter();
  const { id } = router.query;
  const [comments, setComments] = useState<Comment[]>([]);
  const [article, setArticle] = useState<ArticleList>(initialArticle);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchComments = async () => {
      try {
        const response = await axiosInstance.get(`/articles/${id}/comments`, {
          params: {
            limit: 10,
          },
        });
        setComments(response.data.list);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    const fetchArticle = async () => {
      try {
        const data = await getArticles(id);
        if (!data) {
          throw new Error('해당 게시글의 데이터를 찾을 수 없습니다.');
        }
        setArticle(data);
      } catch (error) {
        console.error('데이터를 불러오는데 실패 했습니다.', error);
      }
    };

    fetchComments();
    fetchArticle();
  }, [router.isReady]);

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

  return (
    <div className={styles['container']}>
      <div className={styles['article-section']}>
        <div className={styles['article-title']}>{article.title}</div>
        <div className={styles['article-info']}>
          <div className={styles['article-userinfo']}>
            <Profile />
            <div className={styles['article-nickname']}>
              {article.writer.nickname}
            </div>
            <div className={styles['article-createdAt']}>
              {formatDate(article.createdAt)}
            </div>
          </div>
          <div className={styles['article-likecount']}>
            <Heart />
            {article.likeCount}
          </div>
        </div>
        <div className={styles['article-content']}>{article.content}</div>
      </div>
      {comments.length > 0 ? (
        <div>
          {comments.map((comment, index) => (
            <div className={styles['comment-container']} key={index}>
              <div className={styles['comment-header']}>
                <div className={styles['comment-content']}>
                  {comment.content}
                </div>
                <SortIcon />
              </div>
              <div className={styles['comment-info']}>
                <div className={styles['comment-info-content']}>
                  {comment.writer.image ? (
                    <img
                      className={styles['profile-icon']}
                      src={comment.writer.image}
                    />
                  ) : (
                    <Profile className={styles['profile-icon']} />
                  )}
                  <div className={styles['comment-user-info']}>
                    <div className={styles['comment-nickname']}>
                      {comment.writer.nickname}
                    </div>
                    <div className={styles['comment-updatedAt']}>
                      {formatDate(comment.updatedAt)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="comment-empty">
          <EmptyComment className="comment-empty-icon" />
          <div className="comment-empty-content">아직 문의가 없어요</div>
        </div>
      )}
    </div>
  );
}

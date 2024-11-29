import axiosInstance from '@/lib/axiosInstance';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Profile from '@public/svgs/ic_profile.svg';
import EmptyComment from '@public/svgs/Img_inquiry_empty.svg';
import SortIcon from '@public/svgs/ic_kebab.svg';
import styles from '@styles/BoardDetailPage.module.css';

interface Comment {
  id: number;
  title: string;
  content: string;
  image?: string;
  likecount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
  isLiked: boolean;
}

const BoardsThreadPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    console.log(id);
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

    fetchComments();
  }, []);

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
    <div>
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
                  <Profile className={styles['profile-icon']} />
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
};

export default BoardsThreadPage;

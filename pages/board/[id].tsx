import axiosInstance from '@/lib/axiosInstance';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Profile from '@public/svgs/ic_profile.svg';
import EmptyComment from '@pubilc/svgs/Img_inquiry_empty.svg';
import DropdownMenu from '@components/DropdownMenu';

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
  isEditing: boolean;
  originalContent: string;
}

const BoardsThreadPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axiosInstance.get(`/articles/${id}`);
        // 각 댓글에 isEditing 및 originalContent 상태 추가
        const commentsWithEditState: Comment[] = response.data.list.map(
          (comment: Comment) => ({
            ...comment,
            isEditing: false,
            originalContent: comment.content, // 원본 내용을 저장
          }),
        );
        setComments(commentsWithEditState);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div>
      {comments.length > 0 ? (
        <div>
          {comments.map((comment, index) => (
            <div className="comment-container" key={index}>
              <div className="comment-header">
                {comment.isEditing ? (
                  <textarea
                    className="comment-edit-content"
                    value={comment.content}
                    onChange={(e) =>
                      setComments((prevComments) =>
                        prevComments.map((c, i) =>
                          i === index ? { ...c, content: e.target.value } : c,
                        ),
                      )
                    }
                  />
                ) : (
                  <>
                    <div className="comment-content">{comment.content}</div>
                    <DropdownMenu
                      onSelection={(action: string) => {
                        if (action === 'fixed') {
                          handleEditClick(index);
                        }
                        if (action === 'delete') {
                          console.log('Delete action triggered');
                        }
                      }}
                    />
                  </>
                )}
              </div>
              <div className="comment-info">
                <div className="comment-info-content">
                  <Profile className="profile-icon" />

                  <div className="comment-user-info">
                    <div className="comment-nickname">
                      {comment.writer.nickname}
                    </div>
                    <div className="comment-updatedAt">
                      {formatDate(comment.updatedAt)}
                    </div>
                  </div>
                </div>
                {comment.isEditing && (
                  <div className="comment-edit-actions">
                    <button
                      className="comment-edit-cancelbtn"
                      onClick={() => handleCancelEdit(index)}
                    >
                      취소
                    </button>
                    <button className="comment-edit-successbtn">
                      수정 완료
                    </button>
                  </div>
                )}
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

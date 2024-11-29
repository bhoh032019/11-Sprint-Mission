import { ChangeEvent, useEffect, useState } from 'react';
import styles from '@styles/AddBoard.module.css';
import FileInput from '@components/FileInput';

interface BoardCreateFormProps {
  initialValues?: {
    title: string;
    content: string;
    imgFile: File | null;
  };
  initialPreview: string | null;
}

const INITIAL_VALUES = {
  title: '',
  content: '',
  imgFile: null,
};

export default function AddBoardPage({
  initialValues = INITIAL_VALUES,
  initialPreview,
}: BoardCreateFormProps) {
  const [values, setValues] = useState(initialValues);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (
    name: string,
    value: string | string[] | File | null,
  ) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => handleChange(e.target.name, e.target.value);

  useEffect(() => {
    const { title, content } = values;
    if (title && content) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [values]);

  return (
    <div className={styles['container']}>
      <form>
        <div className={styles['container-title']}>
          게시글 쓰기
          <button
            className={`${styles.Registerbtn} ${
              isFormValid ? styles.active : ''
            }`}
            disabled={!isFormValid}
          >
            등록
          </button>
        </div>
        <div className={styles['container-body']}>
          <label
            className={`${styles['section-title']} ${styles['ArticleTitle']}`}
          >
            *제목
            <input
              name="title"
              type="text"
              value={values.title}
              placeholder="제목을 입력해주세요."
              onChange={handleInputChange}
            />
          </label>
          <label
            className={`${styles['section-title']} ${styles['ArticleContent']}`}
          >
            *내용
            <textarea
              name="content"
              value={values.content}
              placeholder="내용을 입력해주세요."
              onChange={handleInputChange}
            />
          </label>
          <label
            className={`${styles['section-title']} ${styles['ArticleImage']}`}
          >
            이미지
            <FileInput
              name="imgFile"
              value={values.imgFile}
              initialPreview={initialPreview}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

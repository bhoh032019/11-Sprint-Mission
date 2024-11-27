import { ChangeEvent, useEffect, useState } from 'react';
import styles from '../styles/BoardsPage.module.css';
import FileInput from '@/components/FileInput';

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
            className={`Registerbtn ${isFormValid ? 'active' : ''}`}
            disabled={!isFormValid}
          >
            등록
          </button>
        </div>
        <div>*제목</div>
        <input
          name="title"
          value={values.title}
          placeholder="제목을 입력해주세요."
          onChange={handleInputChange}
        />
        <div>*내용</div>
        <textarea
          name="content"
          value={values.content}
          placeholder="내용을 입력해주세요."
          onChange={handleInputChange}
        />
        <div>이미지</div>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          initialPreview={initialPreview}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

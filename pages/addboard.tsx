import styles from '../styles/BoardsPage.module.css';

const AddBoardPage = () => {
  return (
    <div className={styles['container']}>
      <div>게시글 쓰기</div>
      <form>
        <div>제목</div>
        <input placeholder="제목을 입력해주세요." />
        <div>내용</div>
        <textarea placeholder="내용을 입력해주세요." />
        <div>이미지</div>
      </form>
    </div>
  );
};

export default AddBoardPage;

import React from 'react';
import BestArticlesSection from '../components/boards/BestArticlesSection';
import AllArticlesSection from '../components/boards/AllArticlesSection';
import styles from '../style/BoardsPage.module.css';

export default function BoardsPage() {
  return (
    <div className={styles['container']}>
      <BestArticlesSection />
      <AllArticlesSection />
    </div>
  );
}

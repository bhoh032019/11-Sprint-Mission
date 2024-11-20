import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../style/Header.module.css';
import Logo from '../../images/ic_logo.svg';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles['nav-front']}>
        <Link href="/">
          <Logo alt="판다마켓 로고" />
        </Link>
        <div className={styles['nav-link']}>
          <Link className={styles['nav-list']} href="#">
            자유게시판
          </Link>
          <Link
            href="/items"
            className={
              pathname === '/items' || pathname === '/additem'
                ? styles['active-link nav-list']
                : styles['nav-list']
            }
          >
            중고마켓
          </Link>
        </div>
      </div>
      <Link className={styles['login']} href="/signin">
        로그인
      </Link>
    </nav>
  );
};

export default Header;

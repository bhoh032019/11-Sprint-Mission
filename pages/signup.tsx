import { useEffect, useState } from 'react';
import styles from '@styles/Signup.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axiosInstance from '@/lib/axiosInstance';

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [nickname, setNickname] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const validateForm = () => {
    const emailValid = validateEmail(email);
    const passwordValid = password.length >= 8;
    const confirmPasswordValid = password === passwordConfirmation;
    setIsEmailValid(emailValid);
    setIsPasswordValid(passwordValid);
    setIsConfirmPasswordValid(confirmPasswordValid);
    setIsFormValid(emailValid && passwordValid && confirmPasswordValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      try {
        await axiosInstance.post('/auth/signUp', {
          email,
          nickname,
          password,
          passwordConfirmation,
        });

        alert('회원가입이 완료되었습니다.');
        router.push('/login');
      } catch (error) {
        console.error('회원가입 실패:', error);
        throw new Error('회원가입에 실패했습니다.');
      }
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      router.replace('/');
    } else {
      setIsCheckingAuth(false);
    }
  }, []);

  if (isCheckingAuth) {
    return null;
  }

  return (
    <div className={styles['signup-page']}>
      <Link href="/">
        <Image
          src="/pngs/ic_Pandalogo.png"
          alt="판다마켓 로고"
          width={396}
          height={132}
          className={styles['signup-image']}
        />
      </Link>
      <div className={styles['sign']}>
        <form className={styles['sign-form']} onSubmit={handleSubmit}>
          <div className={styles['sign-input']}>
            <label className={styles['sign-label']}>이메일</label>
            <input
              className={`${styles['input-area']} ${
                !isEmailValid && email ? styles['error'] : ''
              }`}
              type="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateForm}
            />
            {!isEmailValid && email && (
              <div className={styles['failure-message']}>
                잘못된 이메일 형식입니다.
              </div>
            )}
          </div>
          <div className={styles['sign-input']}>
            <label className={styles['sign-label']}>닉네임</label>
            <input
              className={styles['input-area']}
              type="text"
              placeholder="닉네임을 입력해주세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <div className={styles['sign-input']}>
            <label className={styles['sign-label']}>비밀번호</label>
            <div className={styles['input-wrapper']}>
              <input
                className={`${styles['input-area']} ${
                  !isPasswordValid && password ? styles['error'] : ''
                }`}
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validateForm}
              />
              <button
                type="button"
                className={styles['toggle-password-btn']}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <Image
                  src={`/pngs/${
                    showPassword
                      ? 'btn_visibility_off.png'
                      : 'btn_visibility_on.png'
                  }`}
                  className={styles['toggle-password']}
                  alt="비밀번호 보기"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            {!isPasswordValid && password && (
              <div className={styles['failure-message']}>
                비밀번호는 8자 이상이어야 합니다.
              </div>
            )}
          </div>
          <div className={styles['sign-input']}>
            <label className={styles['sign-label']}>비밀번호 확인</label>
            <div className={styles['input-wrapper']}>
              <input
                className={`${styles['input-area']} ${
                  !isConfirmPasswordValid && passwordConfirmation
                    ? styles['error']
                    : ''
                }`}
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="비밀번호를 다시 입력해주세요"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                onBlur={validateForm}
              />
              <button
                type="button"
                className={styles['toggle-password-btn']}
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                <Image
                  src={`/pngs/${
                    showConfirmPassword
                      ? 'btn_visibility_off.png'
                      : 'btn_visibility_on.png'
                  }`}
                  className={styles['toggle-password']}
                  alt="비밀번호 보기"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            {!isConfirmPasswordValid && passwordConfirmation && (
              <div className={styles['failure-message']}>
                비밀번호가 일치하지 않습니다.
              </div>
            )}
          </div>
          <div className={styles['submit']}>
            <button
              className={`${styles['sign-button']} ${
                isFormValid ? styles['active'] : ''
              }`}
              type="submit"
              disabled={!isFormValid}
            >
              회원가입
            </button>
          </div>
        </form>
        <div className={styles['outer']}>
          간편 로그인하기
          <div className={styles['social']}>
            <Link href="https://www.google.com/">
              <Image
                src="/pngs/ic_google.png"
                alt="구글"
                width={42}
                height={42}
              />
            </Link>
            <Link href="https://www.kakaocorp.com/page/">
              <Image
                src="/pngs/ic_kakao.png"
                alt="카카오"
                width={42}
                height={42}
              />
            </Link>
          </div>
        </div>
        <div className={styles['signup-footer']}>
          이미 회원이신가요?{' '}
          <Link className={styles['link-signup']} href="./login">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

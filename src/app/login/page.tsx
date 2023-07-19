'use client';

import { signIn, useSession } from 'next-auth/react';

import styles from './Login.module.scss';
import KakaoLogin from '@/components/Sign/KakaoLogin';

const Login = () => {
  const { data: session } = useSession();

  const onClickSignIn = () => {
    signIn('kakao');
  };

  return (
    <div className={styles.container}>
      {!session && (
        <div className={styles.loginBox}>
          <h1 className={styles.title}>로그인</h1>
          <div>
            <button className={styles.loginBtn} type='button' onClick={onClickSignIn}>
              next-auth
            </button>
            <KakaoLogin />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

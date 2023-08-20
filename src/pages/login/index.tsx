'use client';

import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';

import styles from './Login.module.scss';
import KakaoLogin from '@/components/Sign/KakaoLogin';

const Login = () => {
  const { data } = useSession();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    script.onload = () => {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    };
    document.body.appendChild(script);
  }, []);

  const onClickSignIn = () => {
    signIn('kakao')
      .then((res) => {
        console.log(res, 'res');
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  };

  return (
    <div className={styles.container}>
      {!data?.session && (
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

'use client';

import { useEffect } from 'react';

import styles from './Login.module.scss';
import KakaoLogin from '@/components/Sign/KakaoLogin';

const Login = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    script.onload = () => {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>로그인</h1>
        <div>
          <KakaoLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;

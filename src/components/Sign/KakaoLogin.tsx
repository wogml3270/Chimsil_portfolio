'use client';

import styles from './Sign.module.scss';

const KakaoLogin = () => {
  const onClick = () => {
    if (!window.Kakao) return;
    window.Kakao.Auth.login({
      success: () => {
        window.Kakao?.Auth.authorize({
          redirectUri: 'http://localhost:3000/api/auth/callback/kakao',
        });
      },
      fail: () => {
        console.log('shit');
      },
    });
  };

  return (
    <div className={styles.container}>
      <button id='kakaoLoginBtn' className={styles.loginBtn} onClick={onClick} type='button'>
        KAKAO LOGIN
      </button>
    </div>
  );
};

export default KakaoLogin;

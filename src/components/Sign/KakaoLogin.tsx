import useKakaoLogin from '@/hooks/useKakaoLogin';

import styles from './Sign.module.scss'

const KakaoLogin = () => {

  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/api/auth/callback/kakao',
    });
  }

  const handleLoginSuccess = (response: any) => {
    console.log('Kakao login successful:', response);
  };

  const handleLoginFailed = (error: any) => {
    console.error('Kakao login failed:', error);
  };

  useKakaoLogin({
    onSuccess: handleLoginSuccess,
    onFailed: handleLoginFailed,
  });

  return (
    <div className={styles.container}>
      <button
        id="kakaoLoginBtn"
        className={styles.loginBtn}
        onClick={kakaoLogin}
        type="button">
        KAKAO LOGIN
      </button>
    </div>
  );
};

export default KakaoLogin;
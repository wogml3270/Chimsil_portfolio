import useKakaoLogin from '@/hooks/useKakaoLogin';

import styles from './Sign.module.scss'


const Login = () => {

  // 등록한 redirectUri를 매개변수로 넣어준다.
  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/kakao',
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

export default Login;
/* eslint-disable no-console */
import { useEffect } from 'react';

interface KakaoLoginOptions {
  onSuccess: (response: any) => void;
  onFailed?: (error: any) => void;
}

const useKakaoLogin = (options: KakaoLoginOptions) => {
  const { onSuccess, onFailed } = options;

  useEffect(() => {
    const handleKakaoLogin = () => {
      if (window.Kakao) {
        window.Kakao.Auth.login({
          success: onSuccess,
          fail: onFailed,
        });
      } else {
        console.error('Kakao JavaScript SDK is not initialized.');
      }
    };

    const initializeKakaoSDK = () => {
      if (!window.Kakao) {
        console.error('Kakao JavaScript SDK is not loaded.');
        return;
      }

      if (!window.Kakao.isInitialized()) {
        console.error('Kakao JavaScript SDK is not initialized.');
        return;
      }
      
      const loginButton = document.querySelector('#kakaoLoginBtn');
      if (loginButton) {
        loginButton.addEventListener('click', handleKakaoLogin);
      }
    };

    initializeKakaoSDK();

    return () => {
      const loginButton = document.querySelector('#kakaoLoginBtn');
      if (loginButton) {
        loginButton.removeEventListener('click', handleKakaoLogin);
      }
    };
  }, [onSuccess, onFailed]);
};

export default useKakaoLogin;

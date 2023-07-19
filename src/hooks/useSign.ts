import { useState, useEffect } from 'react';

const useSign = (): boolean => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkIsLogin = () => {
      if (window.Kakao.Auth) {
        window.Kakao.Auth.getStatusInfo((statusInfo: any) => {
          setIsLogin(statusInfo.status === 'connected');
        });
      }
    };

    if (typeof window !== 'undefined' && typeof window.Kakao !== 'undefined') {
      checkIsLogin();
    }
  }, []);

  return isLogin;
};

export default useSign;

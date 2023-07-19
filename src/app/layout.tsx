'use client';

import { useEffect, ReactNode, FC } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.scss';
import Header from './_common/Header';
import Footer from './_common/Footer';
import Container from '@/components/_common/Container';

interface Props {
  children: ReactNode;
  session: Session | null;
}

declare global {
  interface Window {
    Kakao: any | undefined;
    Naver: any | undefined;
  }
}

const RootLayout: FC<Props> = ({ children, session }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    script.onload = () => {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
      // console.log(window.Kakao.isInitialized());
    };
    document.body.appendChild(script);
  }, []);

  return (
    <html lang='ko'>
      <body>
        <ThemeProvider defaultTheme='light' attribute='class'>
          <Header />
          <Container>
            <SessionProvider session={session}>{children}</SessionProvider>
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

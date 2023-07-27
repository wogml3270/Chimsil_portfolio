import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

import Provider from './Provider';
import Header from './_common/Header';
import Footer from './_common/Footer';
import Container from '@/components/_common/Container';
import '@/styles/globals.scss';

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
  //   script.async = true;
  //   script.onload = () => {
  //     window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  //     // console.log(window.Kakao.isInitialized());
  //   };
  //   document.body.appendChild(script);
  // }, []);

  return (
    <html lang='ko'>
      <body>
        {/* <ThemeProvider defaultTheme='light' attribute='class'> */}
          <Provider>
            <Header />
            <Container>
              {children}
            </Container>
            <Footer />
          </Provider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
};

export default RootLayout;

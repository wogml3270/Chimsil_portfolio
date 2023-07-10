
import React from 'react'

import '@/styles/globals.scss';
import Header from './_common/Header';
import Footer from './_common/Footer';
import Container from '@/components/_common/Container';

interface Props {
  children: React.ReactNode;
}

declare global {
  interface Window {
    Kakao: any | undefined;
  }
}

export const metadata = {
  title: {
    absolute: 'CHIMSIL',
    template: '%s | CHIMSIL'
  }
}

const RootLayout = ({ children }: Props) => {

  return (
    <html lang='ko'>
      <body>
        <Header />
        <Container>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
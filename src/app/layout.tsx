import { ReactNode } from 'react';
import { Metadata } from 'next';

import Provider from './Provider';
import Header from './_common/Header';
import Footer from './_common/Footer';
import Container from '@/components/_common/Container';
import '@/styles/globals.scss';

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'CHIMSIL',
  description: '재희의 포트폴리오 블로그 입니다.',
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='ko'>
      <body>
        <Provider>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

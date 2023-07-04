import React from 'react'

import '@/styles/globals.scss';
import Header from './_common/Header';
import Footer from './_common/Footer';
import Container from '@/components/_common/Container';

interface Props {
  children: React.ReactNode;
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
      <head>
        <title>{metadata.title.absolute}</title>
      </head>
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

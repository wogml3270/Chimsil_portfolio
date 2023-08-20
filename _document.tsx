// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='ko'>
      <Head>
        <link rel='icon' href='/icon?<generated>' type='image/png' sizes='32x32' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

Document.getInitialProps = async (ctx: any) => {
  const initialProps: any | undefined = await Document.getInitialProps(ctx);
  return { ...initialProps };
};

export default Document;

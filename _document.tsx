// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript } from 'next/document';

export const metadata = {
  title: {
    absolute: 'CHIMSIL',
    template: '%s | CHIMSIL'
  }
}

const Document = () => {
  return (
    <Html lang="ko">
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx:any) => {
  const initialProps:any | undefined = await Document.getInitialProps(ctx);
  return { ...initialProps };
};

export default Document;

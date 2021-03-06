import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={true}
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Tinos:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <script
            src="https://apis.google.com/js/platform.js?onload=renderButton"
            async
            defer
            crossOrigin={true}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="my-signin2"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

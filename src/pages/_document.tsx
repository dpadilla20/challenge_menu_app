import Document, { Html, Head, Main, NextScript } from "next/document";

const FONTS = [
  "/fonts/Cera/Cera-Regular.woff2",
  "/fonts/Cera/Cera-Bold.woff2",
  "/fonts/Souvenir/Souvenir-Demi.woff2",
];

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {FONTS.map((href, index) => (
            <link
              key={index}
              rel="preload"
              href={href}
              as="font"
              type="font/woff2"
              crossOrigin=""
            />
          ))}
        </Head>
        <body className="bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* <meta
            name="description"
            content="Explanation - This is for SEO"
          /> */}
          <meta property="og:site_name" content="Felipe & Charlotte's Wedding" />
          <meta
            property="og:description"
            content="See the details & photos from our wedding :)."
          />
          <meta property="og:title" content="The Grantiz Wedding" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body className="bg-[#F9F6EE] bg-mobile-size bg-no-repeat bg-contain antialiased md:bg-double-sides md:bg-repeat-y">
          <Main />
          <NextScript />
        </body>
        {/* <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Next.js Conf 2022 Pictures" />
          <meta
            name="twitter:description"
            content="See pictures from Next.js Conf and the After Party."
          /> -- This is for twitter cards*/}
      </Html>
    );
  }
}

export default MyDocument;

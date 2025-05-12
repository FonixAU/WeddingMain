import Document, { Head, Html, Main, NextScript } from "next/document";
import Footer from "../components/Footer";
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
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"/>
          <script src="https://kit.fontawesome.com/d11b5064a9.js"></script>
        </Head>
        <body className="has-text-black theme-light	bg-[#F9F6EE] bg-mobile-size bg-no-repeat bg-contain antialiased md:bg-double-sides md:bg-repeat-y">
          <Main />
          <NextScript />
          <Footer/>
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

import type { NextPage } from "next";
import Head from "next/head";
import Donate from "../components/Donate";

const Registry: NextPage = () => {
  const goal = 5000;
  const raised = 1750;
  const progress = (raised / goal) * 100;
  return (
    <>
      <Head>
        <title>Felipe & Charlotte's Wedding</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head>
      <main className="mx-auto has-text-centered max-w-[1960px]">
      <section className="hero my-5 rounded-lg is-halfheight">
        <div className="hero-head mt-5">
        <p className="title clabel">Honeymoon</p>
          <p className="subtitle">So... we've already got all the&nbsp;
            <span className="clabel">stuff</span> we could ever need
          </p>
        </div>
        <div className="hero-body subtitle">
          <div className="container">
            So if you'd like to congratulate us in any way, please feel free to contribute to our
            &nbsp;
            <span className="clabel">honeymoon</span> fund. All we can promise in return for your
            investment is &nbsp;<span className="clabel">lots of photos</span>
          </div>
        </div>
        <div className="hero-footer subtitle">
          <Donate/>
        </div>
      </section>
        <div>
          
        </div>
      </main>
    </>
  );
};

export default Registry;

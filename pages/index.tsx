import type { NextPage } from "next";
import Head from "next/head";
import cloudinary from "../utils/cloudinary";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";
import type { ImageProps } from "../utils/types";

const Home: NextPage = () => {
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
      <main className="mx-auto max-w-[1960px] pt-4">
      <header>
      {/* <p className="container flex items-center justify-center mt-5 title">
      Save the date!</p> */}
        <h1 className="container flex items-center justify-center my-4 title text-7xl">
        08/03/27</h1>
        
        <p className="container flex items-center justify-center mb-3 subtitle">
        This is the official page with all the relevant information regarding our wedding.</p>
      </header>
      <section className="my-12"/>
        <section className="hero my-1 bg-[#895129]/10 rounded-lg is-small">
        <div className="hero-body has-text-centered">
          <p className="title clabel">Reception</p>
          <p className="subtitle">
            367 Elgar Rd. 3:30pm Arrival
          </p>
        </div>
      </section>
        <section className="hero my-1 is-small">
        <div className="hero-body has-text-centered">
          <p className="title clabel">Ceremony</p>
          <p className="subtitle">
            Commence 4:00pm<br/>
          </p>
        </div>
      </section>
        <section className="hero my-1 bg-[#895129]/10 rounded-lg is-small">
        <div className="hero-body has-text-centered">
          <p className="title clabel">Reception</p>
          <p className="subtitle">
            Imediate Start. Ends 10:30pm
          </p>
        </div>
      </section>
      <section className="hero is-small">
        <div className="hero-body has-text-centered">
        <p className="title clabel">Child Free</p>
          <p className="subtitle">
            This will be an 18+ event.     
          </p>
        </div>
      </section>
      <section className="hero my-1 bg-[#895129]/10 rounded-lg is-small">
        <div className="hero-body has-text-centered flex flex-col items-center">
          <p className="title clabel">Dress Code</p>
          <img 
          src="dresscode.png"
          alt="Visual guide for the event dress code"
          style={{ maxWidth: '50%', height: 'auto'}} // Basic responsive styling
          />
        </div>
      </section>
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  let reducedResults: ImageProps[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}

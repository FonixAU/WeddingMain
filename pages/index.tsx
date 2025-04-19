import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import cloudinary from "../utils/cloudinary";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";
import type { ImageProps } from "../utils/types";
import Countdown from "react-countdown"
// Import SVGs
import Cake from "../components/Icons/Cake";
import Camera from "../components/Icons/Camera";
import Couple from "../components/Icons/Couple";
import Gift from "../components/Icons/Gift";

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
      <main className="mx-auto max-w-[1960px] p-4 text-black">
      <header>
        {/* <div className="border-2 rounded-md border-black flex items-center justify-center  mb-3 w-fit mx-auto p-2 text-xl px-14 tracking-wider">
          <Countdown date={new Date("2027-03-12T00:00:00")} />
        </div> */}
        <h1 className="container flex items-center justify-center mb-4 text-7xl">
        12/03/27</h1>
        <p className="container flex items-center justify-center mb-3 text-xl">
        Save the date! come join us on our special day.</p>
        <p className="container flex items-center justify-center mb-3 text-lg">
        This is the official page with all the relevant information regarding our wedding.</p>
      </header>
      <div className="container flex justify-center">
      <ul className="mb-3 text-lg">
        <li className="container flex justify-center mt-4">
        <div className="border-2 rounded-md border-black flex items-center justify-center  mb-3 w-fit mx-auto p-2 text-xl px-14 tracking-wider">
        Dress Code
        </div>
        </li>
        <li className="container flex justify-center">
        Formal & Classy
        </li>
        <li className="container flex justify-center mt-7">
        <div className="border-2 rounded-md border-black flex items-center justify-center  mb-3 w-fit mx-auto p-2 text-xl px-14 tracking-wider">
          Food Options
        </div>
        </li>
        <li className="columns-2 mt-2">
          <ul className="column list-disc  mb-3 text-lg ps-5">
          <li>Felipe's Choice
          <ul className="list-disc  mb-3 text-lg ps-5">
          <li>Entre: Oyster
          </li>
          <li>Main: Some sick as food
          </li>
          <li>Desert: Torta Alemã
          </li>
          </ul>
          </li>
          </ul>
          <ul className="column list-disc  mb-3 text-lg ps-5">
          <li>Charlotte's Choice
          <ul className="list-disc  mb-3 text-lg ps-5">
          <li>Entre: Charblack Corn
          </li>
          <li>Main: Vego Nibbles
          </li>
          <li>Desert: Candy
          </li>
          </ul>
          </li>
          </ul>
        </li>
        </ul>
      </div>
        {/* Columns With info */}
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-4 px-9">
          {/* First Item */}
          <div className="after:content relative mb-5 flex h-[450px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-black/10 px-6 pb-16 pt-64 text-center shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Image
                src="/wedding.jpg"
                fill={true}
                alt="Wedding Venue"
                />
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[275px] bg-gradient-to-b from-white/0 via-white to-white"></span>
            </div>
            <Couple />
            <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
              Ceremony
            </h1>
            <ul className="list-none max-w-[40ch] /75 sm:max-w-[32ch]">
              <li>This cool place we booked out</li>
              <li>1:00PM</li>
            </ul>
          </div>
          {/* Second Item */}
          <div className="after:content relative mb-5 flex h-[450px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-black/10 px-6 pb-16 pt-64 text-center  shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Image
                src="/reception.webp"
                fill={true}
                alt="Wedding Venue"
                />
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[275px] bg-gradient-to-b from-white/0 via-white to-white"></span>
            </div>
            <Cake />
            <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
              Reception
            </h1>
            <ul className="list-none max-w-[40ch] /75 sm:max-w-[32ch]">
              <li>This cool place we booked out</li>
              <li>4:00PM</li>
            </ul>
          </div>
        </div>
        {/* Column group 2 */}
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-4 px-9">
          {/* Third Item */}
          <div className="after:content relative mb-5 flex h-[400px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-black/10 px-6 pb-16 pt-64 text-center  shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <Camera />
            <h1 className="mt-4 mb-4 text-base font-bold uppercase tracking-widest">
              Photo Gallery
            </h1>
            <p className="max-w-[40ch] /75 sm:max-w-[32ch]">
            Check out the best moments from the best day of our lives, or add some of your own!
            </p>
            <a
              className="pointer z-10 mt-6 rounded-lg border border-black bg-black px-3 py-2 text-sm font-semibold text-white transition hover:bg-black/10 hover: md:mt-4 hover:text-black"
              href="/gallery"
              target="_parent"
              rel="noreferrer"
            >
              Say Cheese!
            </a>
          </div>
          {/* Fourth Item */}
          <div className="after:content relative mb-5 flex h-[400px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-black/10 px-6 pb-16 pt-64 text-center  shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <Gift />
            <h1 className="mt-4 mb-4 text-base font-bold uppercase tracking-widest">
              Registry
            </h1>
            <p className="max-w-[40ch] /75 sm:max-w-[32ch]">
              Give us a lil' somethin somethin, help us spruce up our home, or contribute to our life together!
            </p>
            <a
              className="pointer z-10 mt-6 rounded-lg border border-black bg-black px-3 py-2 text-sm font-semibold text-white transition hover:bg-black/10 hover: md:mt-4 hover:text-black"
              href="/registry"
              target="_parent"
              rel="noreferrer"
            >
              Feeling Generous?
            </a>
          </div>
        </div>
      </main>
      <footer className="p-6 text-center /80 sm:p-12">
      Feel free to contact us if you have any other questions
      </footer>
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

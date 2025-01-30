import type { NextPage } from "next";
import Head from "next/head";
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
      <main className="mx-auto max-w-[1960px] p-">
      <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          If you're curious about our trip and want to follow along. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Honeymoon</h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
        All contributions will go towards funding our first big trip together to relax and start our marriage off on the right foot.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Donate here!</a>
        </div>
        <div className="overflow-hidden h-5 my-8 text-xs flex rounded-xl bg-gray-200">
          <div
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="border-2 rounded-xl border-indigo-500 flex items-center justify-center text-white mb-3 w-fit mx-auto p-2 text-xl px-14 tracking-wider">
        <span className="text-xl font-semibold inline-block text-indigo-500">
            ${raised} / ${goal}
        </span>
        </div>
      </div>
    </div>
  </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
      Feel free to contact us if you have any other questions
      </footer>
    </>
  );
};

export default Registry;

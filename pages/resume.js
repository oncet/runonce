import Head from "next/head";
import { useState } from "react";

import FadeInOnEntry from "@/components/FadeInOnEntry";
import Footer from "@/components/Footer";
import Header from "@/components/ResumeHeader";
import Educar from "@/components/experience/Educar";
import Educar2018 from "@/components/experience/Educar2018";
import Elementum from "@/components/experience/Elementum";
import EntornosEducativos from "@/components/experience/EntornosEducativos";
import Gm2dev from "@/components/experience/Gm2dev";
import Konfio from "@/components/experience/Konfio";
import Persiscal from "@/components/experience/Persiscal";
import Tromzo from "@/components/experience/Tromzo";
import Yappa from "@/components/experience/Yappa";
import MailIcon from "@/components/icons/MailIcon";

export default function Home() {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <>
      <Head>
        <title>Camilo Rivera / Web dev</title>
        <meta
          name="description"
          content="Experienced developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
        <meta property="og:image" content="https://runonce.dev/og.jpg" />
      </Head>
      <main>
        <Header />
        <div className="mx-auto flex max-w-screen-md flex-col gap-7 px-4 print:max-w-none print:gap-3 print:px-0">
          <Tromzo />
          <Konfio />
          <Yappa />
          <Elementum />
          <Educar2018 />
          <div>
            <div className="flex justify-center">
              <button
                className="group flex w-[145px] items-center justify-between gap-2 rounded-xl border-2 border-slate-800 px-4 py-2 font-semibold text-slate-200"
                onClick={() => setIsShowMore(!isShowMore)}
              >
                {isShowMore ? "Show less" : "Show more"}
                {isShowMore ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 fill-slate-600 transition group-hover:fill-slate-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 fill-slate-600 transition group-hover:fill-slate-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={
                "grid transition-all duration-300 ease-in-out " +
                (isShowMore
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0")
              }
            >
              <div className="row-[1_/_span_2] overflow-hidden">
                <div className="mt-7 flex flex-col  gap-4">
                  <FadeInOnEntry>
                    <Gm2dev />
                  </FadeInOnEntry>
                  <FadeInOnEntry>
                    <Educar />
                  </FadeInOnEntry>
                  <FadeInOnEntry>
                    <Persiscal />
                  </FadeInOnEntry>
                  <FadeInOnEntry>
                    <EntornosEducativos />
                  </FadeInOnEntry>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto mt-8 max-w-screen-md px-4">
          <blockquote cite="https://addyosmani.com/blog/good-code/">
            <p className="text-center text-3xl font-thin tracking-wide text-slate-300 [text-wrap:balance]">
              Good code is like a love letter to the next developer who will
              maintain it.
            </p>
            <footer className="mt-5 text-right text-slate-400">
              <div className="font-bold">Addy Osmani</div>
              <cite className="text-sm not-italic text-slate-400">
                Learning JavaScript Design Patterns
              </cite>
            </footer>
          </blockquote>
          <blockquote cite="https://addyosmani.com/blog/good-code/">
            <p className="text-center text-3xl font-thin tracking-wide [text-wrap:balance]">
              You should name a variable using the same care with which you name
              a first-born child.
            </p>
            <footer className="mt-5 text-right text-slate-400">
              <div className="font-bold">Robert C. Martin</div>
              <cite className="text-sm not-italic text-slate-400">
                Clean Code: A Handbook of Agile Software Craftsmanship
              </cite>
            </footer>
          </blockquote>
        </div> */}
        <div className="mt-8 bg-slate-200 py-6 text-center terminal:bg-black dark:bg-slate-800 sm:text-left">
          <p className="mx-auto max-w-screen-md px-4 text-slate-800 terminal:text-yellow-200 dark:text-slate-400">
            Contact me at{" "}
            <a
              href="mailto:camilorivera86@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-lg font-semibold text-sky-600 terminal:text-yellow-400 dark:text-sky-500"
            >
              <MailIcon /> camilorivera86@gmail.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

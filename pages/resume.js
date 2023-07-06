import Head from "next/head";
import { useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/ResumeHeader";
import Educar from "@/components/experience/Educar";
import Educar2018 from "@/components/experience/Educar2018";
import Elementum from "@/components/experience/Elementum";
import EntornosEducativos from "@/components/experience/EntornosEducativos";
import Gm2dev from "@/components/experience/Gm2dev";
import Konfio from "@/components/experience/Konfio";
import LeanderGames from "@/components/experience/LeanderGames";
import Persiscal from "@/components/experience/Persiscal";
import Yappa from "@/components/experience/Yappa";
import MailIcon from "@/components/icons/MailIcon";

export default function Home() {
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);

  return (
    <>
      <Head>
        <title>Camilo Rivera / Software Engineer</title>
        <meta
          name="description"
          content="Experienced developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
        <meta property="og:image" content="https://runonce.io/og.jpg" />
      </Head>
      <main>
        <Header />
        <div className="mx-auto flex max-w-screen-md flex-col gap-7 px-4 print:max-w-none print:gap-3 print:px-0">
          <Konfio />
          <Yappa />
          <Elementum />
          <Educar2018 />
          <Gm2dev />
          <div>
            <div className="relative text-center print:hidden">
              <hr
                className={
                  "border-1 absolute inset-y-1/2 w-full transition-opacity duration-1000 dark:border-slate-800 " +
                  (isExperienceExpanded ? "opacity-100" : "opacity-0")
                }
              />
              <button
                onClick={() => setIsExperienceExpanded(true)}
                disabled={isExperienceExpanded}
                className={
                  "relative rounded-lg border border-white bg-white px-4 py-2 font-semibold text-slate-700 outline outline-2 outline-blue-400 transition-opacity [-webkit-tap-highlight-color:transparent] dark:border-slate-700 dark:bg-slate-800 dark:text-sky-500 " +
                  (isExperienceExpanded ? "opacity-0" : "opacity-100")
                }
              >
                View more
              </button>
            </div>
            <div
              className={
                "grid transition-all duration-1000 ease-in-out print:block print:opacity-100 " +
                (isExperienceExpanded
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0")
              }
            >
              <div className="row-[1_/_span_2] overflow-hidden">
                <div className="mt-7 flex flex-col gap-7 print:gap-3">
                  <LeanderGames />
                  <Educar />
                  <Persiscal />
                  <EntornosEducativos />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-slate-200 py-6 text-center dark:bg-slate-800 sm:text-left">
          <p className="mx-auto max-w-screen-md px-4 text-slate-800 dark:text-slate-400">
            Contact me at{" "}
            <a
              href="mailto:camilorivera86@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-lg font-semibold text-sky-600 dark:text-sky-500"
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

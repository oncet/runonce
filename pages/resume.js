import Head from "next/head";

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
import FadeInOnEntry from "@/components/FadeInOnEntry";
import Tromzo from "@/components/experience/Tromzo";

export default function Home() {
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
          <Tromzo />
          <Konfio />
          <Yappa />
          <Elementum />
          <Educar2018 />
          <hr className="border-1 terminal:border-dashed terminal:border-orange-800 dark:border-slate-800 print:hidden" />
          <FadeInOnEntry>
            <Gm2dev />
          </FadeInOnEntry>
          <FadeInOnEntry>
            <LeanderGames />
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

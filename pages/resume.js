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
          <Konfio />
          <Yappa />
          <Elementum />
          <Educar2018 />
          <Gm2dev />
          <FadeInOnEntry>
            <hr className="border-1 dark:border-slate-800 print:hidden" />
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

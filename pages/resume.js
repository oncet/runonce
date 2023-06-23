import Head from "next/head";
import { useState } from "react";

import Header from "@/components/Header";
import Educar from "@/components/experience/Educar";
import Educar2018 from "@/components/experience/Educar2018";
import Elementum from "@/components/experience/Elementum";
import EntornosEducativos from "@/components/experience/EntornosEducativos";
import Gm2dev from "@/components/experience/Gm2dev";
import Konfio from "@/components/experience/Konfio";
import LeanderGames from "@/components/experience/LeanderGames";
import Persiscal from "@/components/experience/Persiscal";
import Yappa from "@/components/experience/Yappa";
import Footer from "@/components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Camilo Rivera / Software Engineer</title>
        <meta
          name="description"
          content="Experienced developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
      </Head>
      <Header />
      <main className="">
        <div className="mx-auto flex max-w-screen-md flex-col gap-7 px-4">
          <Konfio />
          <Yappa />
          <Elementum />
          <Educar2018 />
          <Gm2dev />
          <div>
            <div className="relative text-center">
              <hr
                className={
                  "border-1 absolute inset-y-1/2 w-full border-slate-800 transition-opacity duration-1000 " +
                  (isOpen ? "opacity-100" : "opacity-0")
                }
              />
              <button
                onClick={() => setIsOpen(true)}
                disabled={isOpen}
                className={
                  "relative rounded-lg border-slate-600 bg-slate-800 px-4 py-2 font-semibold text-sky-500 ring-1 ring-slate-700 transition-opacity [-webkit-tap-highlight-color:transparent] " +
                  (isOpen ? "opacity-0" : "opacity-100")
                }
              >
                {/* <div className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-sky-400" />
                <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-sky-400 " /> */}
                View more
              </button>
            </div>
            <div
              className={
                "grid transition-all duration-1000 ease-in-out " +
                (isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0")
              }
            >
              <div className="row-[1_/_span_2] overflow-hidden">
                <div className="mt-7 flex flex-col gap-7">
                  <LeanderGames />
                  <Educar />
                  <Persiscal />
                  <EntornosEducativos />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8  bg-slate-800 py-8  text-center  sm:text-left">
          <p className="mx-auto max-w-screen-md px-4 text-slate-400">
            Contact me at{" "}
            <a
              href="mailto:camilorivera86@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-lg font-semibold text-sky-500	"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>{" "}
              camilorivera86@gmail.com
            </a>
          </p>
        </div>
        {/* <blockquote className="sm:my-20">
          <p className="py-4 text-center text-3xl font-thin tracking-wide [text-wrap:balance]">
            &quot;You should name a variable using the same care with which you
            name a first-born child.&quot;
          </p>
          <figcaption className="mt-4 text-right">
            <div className="font-bold">Robert C. Martin</div>
            <cite className="text-sm not-italic text-slate-400">
              Clean Code: A Handbook of Agile Software Craftsmanship
            </cite>
          </figcaption>
        </blockquote> */}
      </main>
      <Footer />
    </>
  );
}

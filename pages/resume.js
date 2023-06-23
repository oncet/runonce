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
      <main className="mx-auto flex max-w-screen-md flex-col gap-7 px-4 ">
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
              className={
                "relative rounded-lg border-slate-600 bg-slate-800 px-4 py-2 font-semibold text-sky-500 ring-1 ring-slate-700 transition-opacity [-webkit-tap-highlight-color:transparent] " +
                (isOpen ? "opacity-0" : "opacity-100")
              }
            >
              <div className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-sky-400" />
              <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-sky-400 " />
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

import Head from "next/head";

import Konfio from "@/components/experience/Konfio";
import Header from "@/components/Header";
import Yappa from "@/components/experience/Yappa";
import Elementum from "@/components/experience/Elementum";
import Educar from "@/components/experience/Educar";
import Link from "next/link";
import Gm2dev from "@/components/experience/Gm2dev";
import LeanderGames from "@/components/experience/LeanderGames";
import Educar2018 from "@/components/experience/Educar2018";

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
      </Head>
      <Header />
      <main className="mx-auto flex max-w-screen-md flex-col gap-7 px-4 pb-8">
        <Konfio />
        <Yappa />
        <Elementum />
        <Educar2018 />
        <Gm2dev />
        <LeanderGames />
        <Educar />
        <blockquote className="sm:my-20">
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
        </blockquote>
      </main>
      <footer className="border-t border-t-slate-800 px-4 py-8">
        <div className="mx-auto max-w-screen-md px-4">
          <ul className="flex flex-col gap-8 text-right text-slate-400 sm:flex-row">
            <li>
              <Link
                href="/"
                className="transition duration-300 hover:text-slate-300"
              >
                runonce.io
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/oncet/"
                className="transition duration-300 hover:text-slate-300"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/1140065/camilo/"
                className="transition duration-300 hover:text-slate-300"
              >
                Stack Overlow
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/camilorivera/"
                className="transition duration-300 hover:text-slate-300"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

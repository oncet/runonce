import Head from "next/head";

import Konfio from "@/components/experience/Konfio";
import Header from "@/components/Header";
import Yappa from "@/components/experience/Yappa";
import Elementum from "@/components/experience/Elementum";
import Educar from "@/components/experience/Educar";

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
        <Educar />
        <blockquote className="my-20">
          <p className="py-4 text-center text-3xl font-thin tracking-wide">
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
          <ul className="flex gap-4 text-slate-400 ">
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

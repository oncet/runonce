import ExternalIcon from "@/components/icons/ExternalIcon";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Camilo Rivera / Projects</title>
        <meta
          name="description"
          content="Experienced developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
        <meta property="og:image" content="https://runonce.dev/og.jpg" />
      </Head>
      <main className="mx-auto w-full max-w-screen-md px-4">
        <h1 className="my-4 text-5xl font-extrabold drop-shadow dark:drop-shadow-none">
          Projects
        </h1>
        <p className="mb-4 text-lg [text-wrap:balance] dark:text-slate-300">
          A highlight of recent personal projects.
        </p>
        <dl className="flex flex-col gap-4">
          <div className="">
            <dt className=" text-lg font-bold dark:text-slate-300">
              <a
                href="https://hiraganaflashcards.vercel.app/"
                className="group inline-flex items-center gap-2"
              >
                Hiragana flashcards
                <ExternalIcon />
              </a>
            </dt>
            <dd>A web app for learning japanese.</dd>
          </div>
          <div className="">
            <dt className="text-lg font-bold dark:text-slate-300">
              <a
                href="https://www.randomepisode.tv/"
                className="group inline-flex items-center gap-2"
              >
                Random episode
                <ExternalIcon />
              </a>
            </dt>
            <dd>
              A web app for selecting random episodes from your favorite shows.
            </dd>
          </div>
        </dl>
      </main>
    </>
  );
}

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
        <meta property="og:image" content="https://runonce.io/og.jpg" />
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
            <dt className="text-lg dark:text-slate-300">
              <a href="https://hiraganaflashcards.vercel.app/">
                Hiragana flashcards
              </a>
            </dt>
            <dd>A web app for people learning japanese.</dd>
          </div>
          <div className="">
            <dt className="text-lg dark:text-slate-300">
              <a href="https://simpsons-episode-picker.vercel.app/">
                Simpsons Episode Picker
              </a>
            </dt>
            <dd>
              A web app for randomly selecting a Simpsons espisode from your
              favourite seasons.
            </dd>
          </div>
        </dl>
      </main>
    </>
  );
}

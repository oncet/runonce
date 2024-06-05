import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Camilo Rivera / Homepage</title>
        <meta
          name="description"
          content="Experienced developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
        <meta property="og:image" content="https://runonce.io/og.jpg" />
      </Head>
      <main className="mx-auto w-full max-w-screen-md px-4">
        <h1 className="my-4 text-6xl font-extrabold lowercase tracking-tight drop-shadow dark:drop-shadow-none">
          Runonce
        </h1>
        <p className="mb-4 text-lg [text-wrap:balance] dark:text-slate-300">
          Hi, welcome to my homepage! 👋 My name is Camilo and I like coding.
        </p>
        <p className="mb-20 text-lg [text-wrap:balance] dark:text-slate-300">
          Checkout my{" "}
          <Link
            href="resume"
            className="font-bold text-sky-600 dark:text-sky-400"
          >
            resume
          </Link>
          .
        </p>
      </main>
    </>
  );
}

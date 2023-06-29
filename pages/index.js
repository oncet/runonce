import Head from "next/head";
import Link from "next/link";

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
      <header className="mx-auto mb-4 max-w-screen-md px-6 pt-4 sm:pt-8">
        <h1 className="text-4xl font-extrabold tracking-tight">runonce</h1>
      </header>
      <main className="mx-auto max-w-screen-md px-6">
        <p className="mb-4 text-lg text-slate-300 [text-wrap:balance]">
          Hi, welcome to my homepage! My name is Camilo and I love coding.
        </p>
        <p className="mb-20 text-lg text-slate-300 [text-wrap:balance]">
          Checkout my{" "}
          <Link href="resume" className="font-bold text-sky-400">
            resume
          </Link>
          .
        </p>
      </main>
    </>
  );
}

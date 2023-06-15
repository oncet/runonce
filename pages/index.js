import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-screen-md flex-col gap-8 p-8">
      <Head>
        <title>runonce</title>
        <meta
          name="description"
          content="Experienced developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
      </Head>
      <h1 className="text-4xl font-extrabold tracking-tight">runonce</h1>
      <p className="text-lg text-slate-300 [text-wrap:balance]">
        Welcome! Hopefully there will be more content here in the future,
        meanwhile you can checkout my{" "}
        <Link href="resume" className="font-bold text-sky-400">
          resume
        </Link>
        .
      </p>
    </main>
  );
}

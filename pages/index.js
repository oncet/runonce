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
      <p className="text-lg">
        Welcome to my homepage. Please take a look at my{" "}
        <Link href="resume" className="font-bold text-sky-400">
          resume
        </Link>
        .
      </p>
      <p className="text-lg text-slate-400">
        Hopefully there will be more content here in the future.
      </p>
      {/* <blockquote className="my-20">
        <p className="py-4 text-right text-3xl font-extrabold tracking-tight">
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
  );
}

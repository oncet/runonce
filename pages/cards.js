import Card from "@/components/Card";
import H3 from "@/components/H3";
import Strong from "@/components/Strong";
import Subtitle from "@/components/Subtitle";
import Head from "next/head";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-screen-md flex-col gap-4">
      <Head>
        <title>Camilo Rivera / Software Engineer</title>
        <meta
          name="description"
          content="Experienced developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
      </Head>
      <div className="flex flex-col gap-4 py-20 text-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold tracking-wide">Camilo Rivera</h1>
          <p className="upper text-2xl font-thin tracking-wide">
            Senior software engineer.
          </p>
        </div>
        <p className="text-xl text-slate-400">
          <Strong>TypeScript</Strong>, <Strong>React</Strong>,{" "}
          <Strong>Node.js</Strong>, <Strong>SQL</Strong>.
        </p>
      </div>
      <Card />
    </main>
  );
}

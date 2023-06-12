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
      <h1 className="text-4xl font-bold">Camilo Rivera</h1>
      <p className="text-lg text-slate-400">
        Experienced developer proficient in <Strong>TypeScript</Strong>,{" "}
        <Strong>React</Strong>, <Strong>Node.js</Strong>, and{" "}
        <Strong>SQL</Strong>.
      </p>
      <h2 className="text-3xl font-bold">Work experience</h2>
      <Card />
    </main>
  );
}

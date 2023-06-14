import Head from "next/head";

import Konfio from "@/components/experience/Konfio";
import Header from "@/components/Header";

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
      <Header />
      <Konfio />
    </main>
  );
}

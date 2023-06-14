import Head from "next/head";

import Konfio from "@/components/experience/Konfio";
import Header from "@/components/Header";
import Yappa from "@/components/experience/Yappa";

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
      <div className="flex flex-col gap-7">
        <Konfio />
        <Yappa />
      </div>
    </main>
  );
}

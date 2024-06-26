import Head from "next/head";

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
        <meta property="og:image" content="https://runonce.dev/og.jpg" />
      </Head>
      <main className="mx-auto flex w-full max-w-screen-md grow flex-col justify-center px-4">
        <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-center text-9xl font-extrabold uppercase italic tracking-wider text-slate-900 decoration-white decoration-wavy decoration-8 underline-offset-[20px] [-webkit-text-stroke:4px_transparent] [text-decoration-skip-ink:none] [text-shadow:white_1px_0_10px]">
          Runonce
        </h1>
      </main>
    </>
  );
}

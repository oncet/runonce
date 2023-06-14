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
      <header className="flex flex-col gap-4 py-20 text-center">
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
      </header>
      <Card
        title="Full-stack engineer"
        subtitle={
          <>
            <Subtitle>jun 2021 — dec 2022</Subtitle>
            <Subtitle>Sr. Pago - Konfio</Subtitle>
          </>
        }
        summary={
          <ul className="flex flex-wrap gap-3">
            <li className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sky-400">
              TypeScript
            </li>
            <li className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sky-400">
              React
            </li>
            <li className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sky-400">
              Nest.js
            </li>
            <li className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sky-400">
              AWS
            </li>
            <li className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sky-400">
              Material UI
            </li>
            <li className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sky-400">
              Tailwind CSS
            </li>
            <li className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sky-400">
              Storybook
            </li>
          </ul>
        }
      >
        <ul className="flex list-disc flex-col gap-4 px-6 text-slate-400">
          <li>
            Collaborated on the user dashboard migration from PHP to{" "}
            <Strong>React</Strong> to improve page load times. Developed
            responsive design and data visualization features.
          </li>
          <li>
            Participated in the development of the Authentication API
            microservice using <Strong>Nest.js</Strong> and{" "}
            <Strong>Amazon Cognito</Strong>. Implemented user authentication,
            authorization, and password recovery features.
          </li>
          <li>
            Collaborated on developing and maintaining reusable UI elements,
            design tokens, and accessibility guidelines for a component library
            using <Strong>Material UI</Strong>, <Strong>TailwindCSS</Strong>,
            and <Strong>Storybook</Strong>.
          </li>
          <li>
            Worked with other developers and designers to develop new features
            and fix bugs on the frontend of the main product using{" "}
            <Strong>React</Strong>.
          </li>
        </ul>
      </Card>
    </main>
  );
}

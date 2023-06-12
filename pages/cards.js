import H3 from "@/components/H3";
import Strong from "@/components/Strong";
import Subtitle from "@/components/Subtitle";
import Head from "next/head";
import { useState } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    console.log('onClickHandler');
    setIsOpen(open => !open)
  }

  console.log('isOpen', isOpen)

  return (
    <main className="flex flex-col gap-4 max-w-screen-md mx-auto">
      <Head>
        <title>Camilo Rivera / Software Engineer</title>
        <meta name="description" content="Experienced developer proficient in TypeScript, React, Node.js, and SQL." key="desc" />
      </Head>
      <h1 className="text-4xl font-bold">Camilo Rivera</h1>
      <p className="text-lg text-slate-400">
        Experienced developer proficient in <Strong>TypeScript</Strong>,{" "}
        <Strong>React</Strong>, <Strong>Node.js</Strong>, and{" "}
        <Strong>SQL</Strong>.
      </p>
      <h2 className="text-3xl font-bold">Work experience</h2>
      <div className="flex flex-col gap-4 bg-slate-800 px-3 py-3 rounded-lg cursor-pointer" onClick={onClickHandler}>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 justify-between  " >
            <div className="shrink-0">
              <H3>Full-stack engineer</H3>
              <Subtitle>jun 2021 — dec 2022</Subtitle>
              <Subtitle>Sr. Pago/Konfio</Subtitle>
            </div>
            <p className="text-right">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-slate-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </p>
          </div>
          <ul className="flex gap-3 flex-wrap leading-none">
            <li className="border border-slate-700 px-3 py-2 rounded-lg">TypeScript</li>
            <li className="border border-slate-700 px-3 py-2 rounded-lg">React</li>
            <li className="border border-slate-700 px-3 py-2 rounded-lg">Nest.js</li>
            <li className="border border-slate-700 px-3 py-2 rounded-lg">AWS</li>
            <li className="border border-slate-700 px-3 py-2 rounded-lg">Material UI</li>
            <li className="border border-slate-700 px-3 py-2 rounded-lg">Tailwind CSS</li>
            <li className="border border-slate-700 px-3 py-2 rounded-lg">Storybook</li>
          </ul>
        </div>
        {isOpen ? (<ul className={"flex list-disc flex-col px-6 gap-4 text-slate-400 mb-2"}>
          <li>
            Collaborated on the user dashboard migration from PHP to{" "}
            <Strong>React</Strong> to improve page load times. Developed
            responsive design and data visualization features.
          </li>
          <li>
            Participated in the development of the Authentication API microservice
            using <Strong>Nest.js</Strong> and <Strong>Amazon Cognito</Strong>.
            Implemented user authentication, authorization, and password recovery
            features.
          </li>
          <li>
            Collaborated on developing and maintaining reusable UI elements,
            design tokens, and accessibility guidelines for a component library
            using <Strong>Material UI</Strong>, <Strong>TailwindCSS</Strong>, and{" "}
            <Strong>Storybook</Strong>.
          </li>
          <li>
            Worked with other developers and designers to develop new features and
            fix bugs on the frontend of the main product using{" "}
            <Strong>React</Strong>.
          </li>
        </ul>) : ''}
      </div>
    </main>
  );
}

import Strong from "@/components/Strong";
import Ul from "@/components/Ul";
import Educar from "@/components/experience/Educar";
import Elementum from "@/components/experience/Elementum";
import Konfio from "@/components/experience/Konfio";
import Yappa from "@/components/experience/Yappa";
import Head from "next/head";

const experience = [Konfio, Yappa, Elementum, Educar];

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-screen-md mx-auto">
      <Head>
        <title>Camilo Rivera / Software Engineer</title>
        <meta name="description" content="Experienced developer proficient in TypeScript, React, Node.js, and SQL." key="desc" />
      </Head>
      <h1 className="text-4xl font-bold">Camilo Rivera</h1>
      <p className="text-lg text-slate-400 [text-wrap:balance]">
        Experienced developer proficient in <Strong>TypeScript</Strong>,{" "}
        <Strong>React</Strong>, <Strong>Node.js</Strong>, and{" "}
        <Strong>SQL</Strong>.
      </p>
      <h2 className="text-3xl font-bold">Work experience</h2>
      <div className="flex flex-col gap-6">
        {experience.map((Component) => (
          <div key={Component.name} className="flex flex-col gap-4">
            <Component />
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold">Online profiles</h2>
      <Ul condensed>
        <li><a href="https://github.com/oncet/" className="text-slate-400">https://github.com/oncet/</a></li>
        <li><a href="https://www.linkedin.com/in/camilorivera/" className="text-slate-400">https://www.linkedin.com/in/camilorivera/</a></li>
        <li><a href="https://stackoverflow.com/users/1140065/camilo/" className="text-slate-400">https://stackoverflow.com/users/1140065/camilo/</a></li>
      </Ul>
    </main>
  );
}

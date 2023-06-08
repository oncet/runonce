import Strong from "@/components/Strong";
import Konfio from "@/components/experience/Konfio";
import Yappa from "@/components/experience/Yappa";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Camilo Rivera</h1>
      <p className="text-lg text-slate-400">
        Experienced developer proficient in <Strong>TypeScript</Strong>,{" "}
        <Strong>React</Strong>, <Strong>Node.js</Strong>, and{" "}
        <Strong>SQL</Strong>.
      </p>
      <h2 className="text-3xl font-bold">Work experience</h2>
      <div className="flex flex-col gap-4">
        <Konfio />
      </div>
      <div className="flex flex-col gap-4">
        <Yappa />
      </div>
    </main>
  );
}

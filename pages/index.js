import Strong from "@/components/Strong";
import Konfio from "@/components/experience/Konfio";
import Yappa from "@/components/experience/Yappa";
import Elementum from "@/components/experience/Elementum";

const experience = [Konfio, Yappa, Elementum];

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-screen-md mx-auto">
      <h1 className="text-4xl font-bold">Camilo Rivera</h1>
      <p className="text-lg text-slate-400">
        Experienced developer proficient in <Strong>TypeScript</Strong>,{" "}
        <Strong>React</Strong>, <Strong>Node.js</Strong>, and{" "}
        <Strong>SQL</Strong>.
      </p>
      <h2 className="text-3xl font-bold">Work experience</h2>
      {experience.map((Component) => (
        <div key={Component.name} className="flex flex-col gap-4">
          <Component />
        </div>
      ))}
    </main>
  );
}

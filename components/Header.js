import Strong from "./Strong";

export default function Header({ children }) {
  return (
    <header className="flex flex-col gap-4 py-10 text-center sm:py-20">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold tracking-wide">Camilo Rivera</h1>
        <p className="text-2xl font-thin tracking-wide">
          Senior software engineer.
        </p>
      </div>
      <p className="text-xl text-slate-400 [text-wrap:balance]">
        <Strong>TypeScript</Strong>, <Strong>React</Strong>,{" "}
        <Strong>Node.js</Strong>, <Strong>SQL</Strong>.
      </p>
    </header>
  );
}

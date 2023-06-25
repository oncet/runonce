import Strong from "./Strong";

export default function Header({ children }) {
  return (
    <header className="flex break-inside-avoid flex-col gap-4 py-10 text-center print:pt-0 print:text-left sm:py-20">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold tracking-wide">Camilo Rivera</h1>
        <p className="text-2xl font-thin tracking-wide">
          Senior software engineer.
        </p>
      </div>
      <p className="text-xl text-slate-300 [text-wrap:balance] dark:text-slate-400">
        <Strong>TypeScript</Strong>, <Strong>React</Strong>,{" "}
        <Strong>Node.js</Strong>, <Strong>SQL</Strong>.
      </p>
    </header>
  );
}

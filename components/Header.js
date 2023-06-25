import Image from "next/image";

import Strong from "./Strong";

export default function Header({ children }) {
  return (
    <header className="mx-auto max-w-screen-md print:flex print:flex-row print:justify-between">
      <div className="flex break-inside-avoid flex-col gap-4 py-10 text-center print:pt-0 print:text-left sm:py-20">
        <div className="flex flex-col gap-3 print:mt-4">
          <h1 className="text-4xl font-bold tracking-wide">Camilo Rivera</h1>
          <p className="text-2xl font-thin tracking-wide">
            Senior software engineer.
          </p>
        </div>
        <p className="text-xl text-slate-300 [text-wrap:balance] dark:text-slate-400">
          <Strong>TypeScript</Strong>, <Strong>React</Strong>,{" "}
          <Strong>Node.js</Strong>, <Strong>SQL</Strong>.
        </p>
      </div>
      <a href="https://runonce.io/resume" className="hidden print:block">
        <Image
          src="/qr.png"
          width="200"
          height="200"
          alt="QR code"
          className="h-[200px] w-[200px]"
        />
      </a>
    </header>
  );
}

import Image from "next/image";
import { useTheme } from "next-themes";

import profilePic from "../public/profilePic.jpg";
import Strong from "./Strong";

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="mx-auto flex max-w-screen-md flex-col items-center gap-8 px-4 py-10 print:block print:p-0 sm:py-16">
      <button
        aria-label="Terminal mode"
        onClick={() => {
          setTheme(theme === "terminal" ? "system" : "terminal");
        }}
        className="h-32 w-32 overflow-hidden rounded-[64px] transition-[border-radius] duration-300 terminal:rounded-none print:hidden"
      >
        <Image src={profilePic} alt="Using an old MSX-like computer" priority />
      </button>
      <div className="max-w-screen-md print:flex print:max-w-none print:flex-row print:justify-between">
        <div className="flex break-inside-avoid flex-col gap-4 text-center print:pt-0 print:text-left">
          <div className="flex flex-col gap-3 print:mt-4">
            <h1 className="text-4xl font-bold tracking-wide">Camilo Rivera</h1>
            <p className="text-2xl font-thin tracking-wide">
              Software engineer
            </p>
          </div>
          <p className="text-xl text-slate-300 [text-wrap:balance] terminal:text-orange-500 dark:text-slate-400">
            <Strong>TypeScript</Strong>, <Strong>React</Strong>,{" "}
            <Strong>Node.js</Strong>, <Strong>SQL</Strong>
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
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import profilePic from "../public/profilePic.jpg";
// import PrintButton from "./PrintButton";
import Strong from "./Strong";
import ToggleDarkModeButton from "./ToggleDarkModeButton";

export default function Header() {
  return (
    <header>
      <div className="border-b border-slate-200 dark:border-slate-800 print:hidden">
        <div className="mx-auto flex h-12 max-w-screen-md items-center justify-between px-4 text-right dark:text-slate-400">
          <div>
            <Link href="/" className="transition dark:hover:text-slate-300">
              runonce.io
            </Link>
          </div>
          <div className="flex gap-4">
            <ToggleDarkModeButton />
            {/* <PrintButton /> */}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-screen-md flex-col items-center gap-8 px-4 py-10 print:block print:p-0 sm:py-16">
        <Image
          src={profilePic}
          alt="Me using an old MSX-like computer"
          className="h-32 w-32 rounded-full print:hidden"
        />
        <div className="max-w-screen-md print:flex print:max-w-none print:flex-row print:justify-between">
          <div className="flex break-inside-avoid flex-col gap-4 text-center print:pt-0 print:text-left">
            <div className="flex flex-col gap-3 print:mt-4">
              <h1 className="text-4xl font-bold tracking-wide">
                Camilo Rivera
              </h1>
              <p className="text-2xl font-thin tracking-wide">
                Senior software engineer
              </p>
            </div>
            <p className="text-xl text-slate-300 [text-wrap:balance] dark:text-slate-400">
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
    </header>
  );
}

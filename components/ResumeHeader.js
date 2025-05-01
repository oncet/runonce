import { useTheme } from "next-themes";
import Image from "next/image";
import { useGlitch } from "react-powerglitch";

import profilePic from "../public/profilePic.jpg";
import Strong from "./Strong";

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const glitch = useGlitch({
    playMode: "manual",
  });

  return (
    <div className="group relative mx-auto flex max-w-screen-md flex-col items-center  gap-8 px-4 py-10 print:block print:p-0 sm:py-16">
      <button
        className="absolute right-4 top-4 rounded p-4 transition-opacity duration-150 hover:bg-slate-800 group-hover:opacity-100 sm:p-2 sm:opacity-0"
        title="Edit profile information"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-pencil-icon lucide-pencil stroke-slate-400"
        >
          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
          <path d="m15 5 4 4" />
        </svg>
      </button>
      <button
        aria-label="Terminal mode"
        onClick={() => {
          setTheme(theme === "terminal" ? "system" : "terminal");
        }}
        className="h-32 w-32 overflow-hidden rounded-[64px] transition-[border-radius] duration-300 terminal:rounded-none print:hidden"
      >
        <Image
          src={profilePic}
          className="glitch transition-all duration-300 terminal:[filter:sepia(100%)_contrast(150%)_saturate(150%)]"
          alt="Using an old MSX-like computer"
          priority
          ref={glitch.ref}
          onMouseOver={() => glitch.startGlitch()}
        />
      </button>
      <div className="max-w-screen-md print:flex print:max-w-none print:flex-row print:justify-between">
        <div className="flex break-inside-avoid flex-col gap-4 text-center print:pt-0 print:text-left">
          <div className="flex flex-col gap-3 print:mt-4">
            <h1 className="text-4xl font-bold tracking-wide">Camilo Rivera</h1>
            <p className="text-2xl font-thin tracking-wide">Web developer</p>
          </div>
          <p className="text-xl text-slate-300 [text-wrap:balance] terminal:text-orange-500 dark:text-slate-400">
            <Strong>React</Strong>, <Strong>TypeScript</Strong>,{" "}
            <Strong>Node.js</Strong>
          </p>
        </div>
        <a href="https://runonce.dev/resume" className="hidden print:block">
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

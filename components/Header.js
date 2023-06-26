import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

import Strong from "./Strong";
import ComputerIcon from "./icons/ComputerIcon";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

export default function Header({ children }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onClickHandler = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
  };

  return (
    <header className="">
      <div className="border-b border-slate-200 px-2 dark:border-slate-800">
        <div className="mx-auto max-w-screen-md text-right">
          {mounted ? (
            <div className="relative inline-block rounded-full print:hidden">
              <button
                className="rounded-full p-3 [-webkit-tap-highlight-color:transparent]"
                onClick={onClickHandler}
              >
                {theme === "light" ? <SunIcon /> : ""}
                {theme === "dark" ? <MoonIcon /> : ""}
                {theme === "system" ? <ComputerIcon /> : ""}
              </button>
              {isThemeMenuOpen ? (
                <ul className="absolute mt-2 flex flex-col gap-1 overflow-hidden rounded-full bg-slate-200 text-center  dark:bg-slate-800">
                  {theme !== "light" ? (
                    <li>
                      <button
                        className="rounded-full p-3 [-webkit-tap-highlight-color:transparent]"
                        onClick={() => {
                          setTheme("light");
                          setIsThemeMenuOpen(false);
                        }}
                      >
                        <SunIcon />
                      </button>
                    </li>
                  ) : (
                    ""
                  )}
                  {theme !== "dark" ? (
                    <li>
                      <button
                        className="rounded-full p-3 [-webkit-tap-highlight-color:transparent]"
                        onClick={() => {
                          setTheme("dark");
                          setIsThemeMenuOpen(false);
                        }}
                      >
                        <MoonIcon />
                      </button>
                    </li>
                  ) : (
                    ""
                  )}
                  {theme !== "system" ? (
                    <li>
                      <button
                        className="rounded-full p-3 [-webkit-tap-highlight-color:transparent]"
                        onClick={() => {
                          setTheme("system");
                          setIsThemeMenuOpen(false);
                        }}
                      >
                        <ComputerIcon />
                      </button>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="mx-auto max-w-screen-md print:flex print:flex-row print:justify-between">
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
      </div>
    </header>
  );
}

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import ComputerIcon from "./icons/ComputerIcon";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

export default function ToggleDarkModeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onClickHandler = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
  };

  return mounted ? (
    <div className="relative inline-block rounded-full print:hidden">
      <button
        className="rounded-full p-3 text-sky-600 [-webkit-tap-highlight-color:transparent]"
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
  );
}

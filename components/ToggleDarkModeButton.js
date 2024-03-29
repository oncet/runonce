import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

import ComputerIcon from "./icons/ComputerIcon";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import PhoneIcon from "./icons/PhoneIcon";
import TerminalIcon from "./icons/TerminalIcon";

const themeIcons = {
  Light: <SunIcon />,
  Dark: <MoonIcon />,
  System: (
    <>
      <ComputerIcon />
      <PhoneIcon />
    </>
  ),
  Terminal: <TerminalIcon />,
};

export default function ToggleDarkModeButton() {
  const rootRef = useRef();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const handler = (event) => {
    if (!rootRef.current.contains(event.target)) {
      setIsThemeMenuOpen(false);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isThemeMenuOpen) {
      document.addEventListener("click", handler);
    }

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [isThemeMenuOpen]);

  const onClickHandler = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
  };

  return (
    mounted && (
      <div
        className="relative inline-block rounded-full print:hidden"
        ref={rootRef}
      >
        <button
          className={
            "rounded-full p-3 transition [-webkit-tap-highlight-color:transparent] " +
            (["Light", "Dark"].includes(theme) ? "text-sky-600" : "")
          }
          onClick={onClickHandler}
          aria-label="Change theme"
        >
          {
            themeIcons[
              resolvedTheme.charAt(0).toUpperCase() + resolvedTheme.slice(1)
            ]
          }
        </button>
        <div
          className={
            "transition-opacity " +
            (isThemeMenuOpen ? "opacity-100" : "opacity-0")
          }
        >
          {isThemeMenuOpen && (
            <ul className="absolute z-40 mt-2 flex flex-col gap-1 overflow-hidden rounded-full bg-slate-200 text-center terminal:rounded-none terminal:bg-black terminal:text-orange-800 dark:bg-slate-800">
              {Object.keys(themeIcons)
                .filter((themeIcon) => themeIcon !== "Terminal")
                .map((themeName) => (
                  <li key={themeName}>
                    <button
                      title={themeName}
                      aria-label={themeName}
                      className={
                        "rounded-full p-3 [-webkit-tap-highlight-color:transparent] terminal:hover:text-orange-500 " +
                        (themeName.toLowerCase() === theme
                          ? "text-sky-600 terminal:text-yellow-400"
                          : "")
                      }
                      onClick={() => {
                        setTheme(themeName.toLowerCase());
                        setIsThemeMenuOpen(false);
                      }}
                    >
                      {themeIcons[themeName]}
                    </button>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    )
  );
}

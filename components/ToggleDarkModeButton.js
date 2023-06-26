import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import ComputerIcon from "./icons/ComputerIcon";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const themeIcons = {
  light: <SunIcon />,
  dark: <MoonIcon />,
  system: <ComputerIcon />,
};

export default function ToggleDarkModeButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onClickHandler = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
  };

  return (
    mounted && (
      <div className="relative inline-block rounded-full print:hidden">
        <button
          className={
            "rounded-full p-3 [-webkit-tap-highlight-color:transparent] " +
            (["light", "dark"].includes(theme) ? "text-sky-600" : "")
          }
          onClick={onClickHandler}
        >
          {resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
        {isThemeMenuOpen && (
          <ul className="absolute mt-2 flex flex-col gap-1 overflow-hidden rounded-full bg-slate-200 text-center  dark:bg-slate-800">
            {Object.keys(themeIcons).map((themeName) => (
              <li key={themeName}>
                <button
                  className={
                    "rounded-full p-3 [-webkit-tap-highlight-color:transparent] " +
                    (themeName === theme ? "text-sky-600" : "")
                  }
                  onClick={() => {
                    setTheme(themeName);
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
    )
  );
}

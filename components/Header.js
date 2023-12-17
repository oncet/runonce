import Link from "next/link";

import ToggleDarkModeButton from "./ToggleDarkModeButton";
import PrintButton from "./PrintButton";

export default function Header() {
  return (
    <header className="terminal:border-orange-500 border-b border-slate-200 dark:border-slate-800 print:hidden">
      <div className="mx-auto flex h-12 max-w-screen-md items-center justify-between px-4 text-right dark:text-slate-400">
        <div>
          <Link
            href="/"
            className="terminal:text-yellow-500 terminal:hover:text-yellow-300 text-slate-500 transition dark:text-slate-400 dark:hover:text-slate-300"
          >
            runonce.io
          </Link>
        </div>
        <div className="flex gap-4">
          <ToggleDarkModeButton />
          <PrintButton />
        </div>
      </div>
    </header>
  );
}

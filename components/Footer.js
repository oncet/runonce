import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 py-8">
      <div className="mx-auto max-w-screen-md px-4">
        <ul className="flex flex-col gap-8 text-right text-slate-600 dark:text-slate-400 sm:flex-row">
          <li>
            <Link
              href="/"
              className="transition duration-300 hover:text-slate-800 dark:hover:text-slate-300"
            >
              runonce.io
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/oncet/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-slate-800 dark:hover:text-slate-300"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/1140065/camilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-slate-800 dark:hover:text-slate-300"
            >
              Stack Overlow
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/camilorivera/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-slate-800 dark:hover:text-slate-300"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

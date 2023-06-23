import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-t-slate-800 px-4 py-8">
      <div className="mx-auto max-w-screen-md px-4">
        <ul className="flex flex-col gap-8 text-right text-slate-400 sm:flex-row">
          <li>
            <Link
              href="/"
              className="transition duration-300 hover:text-slate-300"
            >
              runonce.io
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/oncet/"
              className="transition duration-300 hover:text-slate-300"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/1140065/camilo/"
              className="transition duration-300 hover:text-slate-300"
            >
              Stack Overlow
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/camilorivera/"
              className="transition duration-300 hover:text-slate-300"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

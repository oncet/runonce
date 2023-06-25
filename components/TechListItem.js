export default function TechListItem({ children }) {
  return (
    <li className="rounded-lg border border-slate-300 px-2 py-1 font-mono text-sky-600 dark:border-slate-700 dark:text-sky-400 print:!border-none print:p-0 print:text-lg print:!text-sky-600">
      {children}
    </li>
  );
}

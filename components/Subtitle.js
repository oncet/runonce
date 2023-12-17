export default function Subtitle({ children }) {
  return (
    <p className="text-lg text-slate-500 terminal:text-orange-400 dark:text-slate-400">
      {children}
    </p>
  );
}

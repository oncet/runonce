export default function Strong({ children }) {
  return (
    <strong className="terminal:text-orange-400 font-mono font-medium text-sky-600 dark:text-sky-400">
      {children}
    </strong>
  );
}

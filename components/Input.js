import { twMerge } from "tailwind-merge";

const Input = ({ id, placeholder, className, ...props }) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      className={twMerge(
        "rounded-xl border-2 px-4 py-2 font-semibold terminal:rounded-none terminal:border-orange-500 dark:border-slate-800 dark:text-slate-200",
        className
      )}
      {...props}
    />
  );
};

export default Input;

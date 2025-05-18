import { twMerge } from "tailwind-merge";

const Label = ({ children, className, ...props }) => {
  return (
    <label
      className={twMerge(
        "font-light transition dark:text-slate-400 group-focus-within:dark:text-slate-300 group-hover:dark:text-slate-200",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;

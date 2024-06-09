import { useState } from "react";
import ToggleExpandIcon from "./icons/ToggleExpandIcon";

export default function Card({ title, subtitle, summary, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    const textSelection = window.getSelection().toString();

    if (!textSelection.length) setIsOpen((open) => !open);
  };

  return (
    <div
      className={
        "flex break-inside-avoid flex-col overflow-hidden rounded-lg border-2 bg-slate-50 transition-all duration-300 [-webkit-tap-highlight-color:transparent] terminal:rounded-none terminal:border-[2px] terminal:border-dashed	terminal:border-orange-500 terminal:bg-black dark:border-slate-800/75 dark:bg-slate-800/75 print:border-none print:p-0 " +
        (isOpen ? "border-slate-400" : "border-slate-200")
      }
    >
      <div className="flex flex-col gap-4">
        <div className="">
          <div
            className={
              "group flex w-full justify-between pb-3 pl-5 pr-3 pt-3 transition duration-300 focus-visible:rounded-t-lg  "
            }
          >
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              className="flex h-7 w-7 scale-150 items-center justify-center rounded-full border dark:border-gray-700"
              onClick={onClickHandler}
              aria-label="Expand card"
              title={`${isOpen ? "Collapse" : "Expand"} ${title} card`}
            >
              <ToggleExpandIcon size="sm" isOpen={isOpen} />
            </button>
          </div>
          <div className="px-5">{subtitle}</div>
        </div>
        <div className="px-3 pb-3 ">{summary}</div>
      </div>
      <div
        className={
          "grid px-3 transition-all duration-300 ease-in-out print:block print:opacity-100 " +
          (isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
        }
      >
        <div className="row-[1_/_span_2] overflow-hidden">
          <div className="mb-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

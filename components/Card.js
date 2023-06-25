import { useState } from "react";

import ToggleExpandIcon from "./ToggleExpandIcon";

export default function Card({ title, subtitle, summary, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    const textSelection = window.getSelection().toString();

    if (!textSelection.length) setIsOpen((open) => !open);
  };

  return (
    <div
      className="flex cursor-pointer flex-col rounded-lg bg-neutral-100 p-3 transition [-webkit-tap-highlight-color:transparent] dark:bg-slate-800/75	dark:hover:bg-slate-800"
      onClick={onClickHandler}
    >
      <div className="flex flex-col gap-4">
        <div className="pl-2">
          <div className="mb-3 flex justify-between">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button aria-label="Expand card" className="print:hidden">
              <ToggleExpandIcon isOpen={isOpen} />
            </button>
          </div>
          {subtitle}
        </div>
        {summary}
      </div>
      <div
        className={
          "grid transition-all duration-300 ease-in-out print:grid-rows-[1fr] print:opacity-100 " +
          (isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
        }
      >
        <div className="row-[1_/_span_2] overflow-hidden">
          <div className="mb-2 mt-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

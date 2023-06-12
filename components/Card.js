import { useState } from "react";
import H3 from "./H3";
import Strong from "./Strong";
import Subtitle from "./Subtitle";

export default function Card({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div
      className="flex cursor-pointer flex-col gap-4 overflow-hidden rounded-lg bg-slate-800/75 p-3 transition hover:bg-slate-800"
      onClick={onClickHandler}
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-1 pl-2">
          <div className="shrink-0">
            <H3>Full-stack engineer</H3>
            <Subtitle>jun 2021 — dec 2022</Subtitle>
            <Subtitle>Sr. Pago - Konfio</Subtitle>
          </div>
          <p className="text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 stroke-slate-400"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              )}
            </svg>
          </p>
        </div>
        <ul className="flex flex-wrap gap-3 leading-none">
          <li className="rounded-lg border border-slate-700 px-3 py-2">
            TypeScript
          </li>
          <li className="rounded-lg border border-slate-700 px-3 py-2">
            React
          </li>
          <li className="rounded-lg border border-slate-700 px-3 py-2">
            Nest.js
          </li>
          <li className="rounded-lg border border-slate-700 px-3 py-2">AWS</li>
          <li className="rounded-lg border border-slate-700 px-3 py-2">
            Material UI
          </li>
          <li className="rounded-lg border border-slate-700 px-3 py-2">
            Tailwind CSS
          </li>
          <li className="rounded-lg border border-slate-700 px-3 py-2">
            Storybook
          </li>
        </ul>
      </div>
      {isOpen ? (
        <ul
          className={"mb-2 flex list-disc flex-col gap-4 px-6 text-slate-400"}
        >
          <li>
            Collaborated on the user dashboard migration from PHP to{" "}
            <Strong>React</Strong> to improve page load times. Developed
            responsive design and data visualization features.
          </li>
          <li>
            Participated in the development of the Authentication API
            microservice using <Strong>Nest.js</Strong> and{" "}
            <Strong>Amazon Cognito</Strong>. Implemented user authentication,
            authorization, and password recovery features.
          </li>
          <li>
            Collaborated on developing and maintaining reusable UI elements,
            design tokens, and accessibility guidelines for a component library
            using <Strong>Material UI</Strong>, <Strong>TailwindCSS</Strong>,
            and <Strong>Storybook</Strong>.
          </li>
          <li>
            Worked with other developers and designers to develop new features
            and fix bugs on the frontend of the main product using{" "}
            <Strong>React</Strong>.
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

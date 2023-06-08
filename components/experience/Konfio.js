import Subtitle from "../Subtitle";

export default function Konfio() {
  return (
    <>
      <div>
        <h3 className="text-xl font-semibold">Full-stack engineer</h3>
        <Subtitle>jun 2021 — dec 2022</Subtitle>
        <Subtitle>Sr. Pago/Konfio</Subtitle>
      </div>
      <ul className="flex list-disc flex-col gap-4 pl-4">
        <li>
          Collaborated with the development team to successfully migrate the
          user dashboard from PHP to <strong>React</strong>, resulting in a
          reduction in page load times. Contributed to the development of key
          features, such as responsive design, and data visualization.
        </li>
        <li>
          Participated in the development of a new Authentication API
          microservice using <strong>Nest.js</strong> and Amazon Cognito. Worked
          with the team to the design and implement key features, such as user
          authentication, authorization, and password recovery.
        </li>
        <li>
          Collaborated with the Component Library team to develop and maintain
          reusable UI elements, design tokens, and accessibility guidelines for
          React components using{" "}
          <strong>Material UI, TailwindCSS, and Storybook</strong>, contributing
          to a more efficient and cohesive design system for the company.
        </li>
        <li>
          Worked collaboratively with a team of developers and designers to
          develop new features and fix bugs on the front-end of the main product
          using <strong>React</strong>.
        </li>
      </ul>
    </>
  );
}

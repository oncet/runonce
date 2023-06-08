import Subtitle from "../Subtitle";
import Strong from "../Strong";

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
          Collaborated on the user dashboard migration from PHP to{" "}
          <Strong>React</Strong> to improve page load times. Developed
          responsive design and data visualization features.
        </li>
        <li>
          Participated in the development of the Authentication API microservice
          using <Strong>Nest.js</Strong> and <Strong>Amazon Cognito</Strong>.
          Implemented user authentication, authorization, and password recovery
          features.
        </li>
        <li>
          Collaborated on developing and maintaining reusable UI elements,
          design tokens, and accessibility guidelines for a component library
          using <Strong>Material UI</Strong>, <Strong>TailwindCSS</Strong>, and{" "}
          <Strong>Storybook</Strong>.
        </li>
        <li>
          Worked with other developers and designers to develop new features and
          fix bugs on the frontend of the main product using{" "}
          <Strong>React</Strong>.
        </li>
      </ul>
    </>
  );
}

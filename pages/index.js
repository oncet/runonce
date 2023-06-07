import Strong from "@/components/Strong";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Camilo Rivera</h1>
      <p className="text-lg text-slate-400">
        Experienced developer proficient in <Strong>TypeScript</Strong>,{" "}
        <Strong>React</Strong>, <Strong>Node.js</Strong>, and{" "}
        <Strong>SQL</Strong>.
      </p>
      <h2 className="text-3xl font-bold">Work experience</h2>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-semibold">Full-stack engineer</h3>
          <p className="text-lg text-slate-400">jun 2021 — dec 2022</p>
          <p className="text-lg text-slate-400">Sr. Pago/Konfio</p>
        </div>
        <ul className="flex list-disc flex-col gap-4 pl-4">
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
            Worked collaboratively with a team of developers and designers to
            develop new features and fix bugs on the front-end of the main
            product using <Strong>React</Strong>.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-semibold">Backend engineer</h3>
          <p className="text-lg text-slate-400">nov 2020 — may 2021</p>
          <p className="text-lg text-slate-400">Yappa World Inc.</p>
        </div>
        <ul className="flex list-disc flex-col gap-4 pl-4">
          <li>
            Worked on the development and maintenance of microservices and
            gateway{" "}
            <strong>REST APIs using TypeScript, Nest.js, and MySQL</strong>.
          </li>
          <li>
            Implemented NATS as a messaging service between microservices,
            enhancing the reliability and performance of inter-service
            communication within the system.
          </li>
          <li>
            Collaborated on front-end tasks using <strong>Vue.js</strong>,
            contributing to the development and maintenance of high-quality user
            interfaces for the company&apos;s product.
          </li>
        </ul>
      </div>
    </main>
  );
}

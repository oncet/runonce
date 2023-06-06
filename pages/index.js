export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Camilo Rivera</h1>
      <p className="text-lg text-slate-400">
        Experienced developer with a focus on delivering high-quality code and
        great user experience. Proficient in a range of technologies, including{" "}
        <strong className="font-medium text-sky-400">TypeScript</strong>,{" "}
        <strong className="font-medium text-sky-400">React</strong>,{" "}
        <strong className="font-medium text-sky-400">Node.js</strong>, and{" "}
        <strong className="font-medium text-sky-400">SQL</strong>. Experience in
        project management and effective communication.
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
            Collaborated with the development team to successfully migrate the
            user dashboard from PHP to <strong>React</strong>, resulting in a
            reduction in page load times. Contributed to the development of key
            features, such as responsive design, and data visualization.
          </li>
          <li>
            Participated in the development of a new Authentication API
            microservice using <strong>Nest.js</strong> and Amazon Cognito.
            Worked with the team to the design and implement key features, such
            as user authentication, authorization, and password recovery.
          </li>
          <li>
            Collaborated with the Component Library team to develop and maintain
            reusable UI elements, design tokens, and accessibility guidelines
            for React components using{" "}
            <strong>Material UI, TailwindCSS, and Storybook</strong>,
            contributing to a more efficient and cohesive design system for the
            company.
          </li>
          <li>
            Worked collaboratively with a team of developers and designers to
            develop new features and fix bugs on the front-end of the main
            product using <strong>React</strong>.
          </li>
        </ul>
      </div>
    </main>
  );
}

import Subtitle from "../Subtitle";

export default function Yappa() {
  return (
    <>
      <div>
        <h3 className="text-xl font-semibold">Backend engineer</h3>
        <Subtitle>nov 2020 — may 2021</Subtitle>
        <Subtitle>Yappa World Inc.</Subtitle>
      </div>
      <ul className="flex list-disc flex-col gap-4 pl-4">
        <li>
          Worked on the development and maintenance of microservices and gateway{" "}
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
    </>
  );
}

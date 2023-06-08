import Subtitle from "../Subtitle";
import Strong from "../Strong";

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
          <Strong>REST APIs</Strong> using <Strong>TypeScript</Strong>,{" "}
          <Strong>Nest.js</Strong>, and <Strong>MySQL</Strong>.
        </li>
        <li>
          Implemented NATS as a messaging service between microservices,
          enhancing the reliability and performance of communication within the
          system.
        </li>
        <li>
          Collaborated on frontend tasks using <Strong>Vue.js</Strong>,
          contributing to the development and maintenance of user interfaces for
          the main product.
        </li>
      </ul>
    </>
  );
}

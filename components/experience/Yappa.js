import H3 from "../H3";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import Ul from "../Ul";

export default function Yappa() {
  return (
    <>
      <div>
        <H3>Backend engineer</H3>
        <Subtitle>nov 2020 — may 2021</Subtitle>
        <Subtitle>Yappa World Inc.</Subtitle>
      </div>
      <Ul>
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
          contributing to the development and maintenance of the main product.
        </li>
      </Ul>
    </>
  );
}

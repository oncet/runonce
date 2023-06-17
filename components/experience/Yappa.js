import Card from "../Card";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";

export default function Yappa() {
  return (
    <Card
      title="Backend engineer"
      subtitle={
        <>
          <Subtitle>nov 2020 — may 2021</Subtitle>
          <Subtitle>Yappa World Inc.</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>MySQL</TechListItem>
          <TechListItem>Nest.js</TechListItem>
          <TechListItem>REST API</TechListItem>
          <TechListItem>TypeScript</TechListItem>
          <TechListItem>Vue.js</TechListItem>
        </TechList>
      }
    >
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
    </Card>
  );
}

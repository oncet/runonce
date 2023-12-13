import Card from "../Card";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";

export default function Elementum() {
  return (
    <Card
      title="Frontend engineer"
      subtitle={
        <>
          <Subtitle>may 2019 — nov 2020</Subtitle>
          <Subtitle>Elementum</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>React</TechListItem>
          <TechListItem>styled-components</TechListItem>
          <TechListItem>Storybook</TechListItem>
          <TechListItem>webpack</TechListItem>
          <TechListItem>REST API</TechListItem>
          <TechListItem>Node.js</TechListItem>
          <TechListItem>Express</TechListItem>
          <TechListItem>MongoDB</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Worked on the development and maintenance of supply chain management
          products, contributing to the design and implementation of key
          features.
        </li>
        <li>
          Collaborated on developing and maintaining reusable UI elements,
          design tokens, and accessibility guidelines for a component library
          using <Strong>React</Strong>, <Strong>styled-components</Strong> and{" "}
          <Strong>Storybook</Strong>.
        </li>
        <li>
          Fine tuned <Strong>webpack</Strong> configurations and implemented
          other key optimizations, such as tree shaking, code splitting, and
          lazy loading. The results included a{" "}
          <strong>
            75% reduction in <code>npm install</code> time and a 70% improvement
            in overall Lighthouse score
          </strong>
          , enhancing both the user and developer experience.
        </li>
        <li>
          Implemented Module Federation as a potential replacement for an
          in-house micro frontend solution, exploring and evaluating new
          technologies to improve the frontend architecture of the product.
        </li>
        <li>
          Worked on the development and maintenance of microservices{" "}
          <Strong>REST APIs</Strong> using <Strong>Node.js</Strong>,{" "}
          <Strong>Express</Strong>, and <Strong>MongoDB</Strong>.
        </li>
      </Ul>
    </Card>
  );
}

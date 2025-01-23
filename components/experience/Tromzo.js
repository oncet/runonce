import Card from "../Card";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";

export default function Tromzo() {
  return (
    <Card
      title="Frontend engineer"
      subtitle={
        <>
          <Subtitle>aug 2023 — current</Subtitle>
          <Subtitle>Tromzo</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>GraphQL</TechListItem>
          <TechListItem>Material UI</TechListItem>
          <TechListItem>Playwright</TechListItem>
          <TechListItem>React</TechListItem>
          <TechListItem>TypeScript</TechListItem>
          <TechListItem>webpack</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Contributed to the <Strong>Playwright</Strong> test suites, writing
          tests for new features and and adding test cases to cover regressions.
        </li>
        <li>
          Added <Strong>Storybook</Strong> to the project. Gradually adding more
          components to it, with props documentation and usage examples.
        </li>
        <li>
          Created a throughout performance report using{" "}
          <Strong>Lighthouse</Strong> and{" "}
          <Strong>webpack-bundle-analyzer</Strong>, which included a set of
          suggested follow up actions such as: lazy loading a certain library or
          changing some <Strong>webpack</Strong> configuration.
        </li>
        <li>
          Created a new dropdown component that renders up to 300x more options
          than the old one with very small performance impact. Achieved by
          leveraging <Strong>Material UI</Strong> components and keeping the DOM
          nodes count at minimum.
        </li>
      </Ul>
    </Card>
  );
}

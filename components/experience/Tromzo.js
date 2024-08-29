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
          <TechListItem>Jest</TechListItem>
          <TechListItem>Material UI</TechListItem>
          <TechListItem>React</TechListItem>
          <TechListItem>TypeScript</TechListItem>
          <TechListItem>webpack</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Added <Strong>Jest</Strong> and started adding tests with{" "}
          <Strong>React Testing Library</Strong>. Previously the project only
          used E2E tests with Selenium and Playwright, but we needed something
          that run faster during local development.
        </li>
        <li>
          Added <Strong>Storybook</Strong> to the project to start documenting
          the new component library. Gradually added components to it, with
          props documentation and examples.
        </li>
        <li>
          Created a throughout performance report of the app using{" "}
          <Strong>Lighthouse</Strong> and{" "}
          <Strong>webpack-bundle-analyzer</Strong>, which included a set of
          suggested follow up actions.
        </li>
        <li>
          Implemented virtualization on the table component for both rows and
          columns. This allowed rendering large amounts of columns at once with
          very small performance impact.
        </li>
        <li>
          Created a new dropdown component that can render up to 30 000 options
          with very little performance impact. The old component was struggling
          to render 10 000 options.
        </li>
      </Ul>
    </Card>
  );
}

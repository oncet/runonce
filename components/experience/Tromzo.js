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
          <Strong>webpack-bundle-analyzer</Strong>, which included set of
          suggested follow up actions to solve some of the issues (like
          implementing lazy loading, combining multiple GraphQL queries into a
          single one, and more).
        </li>
        <li>
          Implemented virtualization for the React table component. This allowed
          to solve the issue of rendering too many columns at once, which was
          causing performance issues.
        </li>
        <li>
          Started the conversation on adding hot reload to improve the developer
          experience, which was eventually added by a team mate.
        </li>
      </Ul>
    </Card>
  );
}

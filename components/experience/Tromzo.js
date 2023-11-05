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
          Creating new <Strong>React</Strong> components using{" "}
          <Strong>Material UI</Strong>.
        </li>
        <li>Implementing new features on the web app.</li>
        <li>
          Adding tests with <Strong>Jest</Strong> and{" "}
          <Strong>React Testing Library</Strong>.
        </li>
        <li>
          Started new initiatives to improve collaboration between the frontend
          and design teams.
        </li>
      </Ul>
    </Card>
  );
}

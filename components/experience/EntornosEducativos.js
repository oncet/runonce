import Card from "../Card";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";

export default function EntornosEducativos() {
  return (
    <Card
      title="Full Stack Engineer"
      subtitle={
        <>
          <Subtitle>jun 2012 — aug 2014</Subtitle>
          <Subtitle>Entornos Educativos</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>Bootstrap</TechListItem>
          <TechListItem>CSS</TechListItem>
          <TechListItem>Drupal</TechListItem>
          <TechListItem>Moodle</TechListItem>
          <TechListItem>MySQL</TechListItem>
          <TechListItem>PHP</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Joined as a full-stack <Strong>PHP</Strong> engineer for e-learning
          products, mostly maintaining and extending <Strong>Moodle</Strong> and{" "}
          <Strong>Drupal</Strong> platforms.
        </li>
        <li>
          Used <Strong>MySQL</Strong> for data storing.
        </li>
        <li>
          Used <Strong>CSS</Strong> for styling the contents of the web apps.
        </li>
      </Ul>
    </Card>
  );
}

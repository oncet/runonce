import Card from "../Card";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";

export default function Persiscal() {
  return (
    <Card
      title="Full-stack engineer"
      subtitle={
        <>
          <Subtitle>oct 2015 — dec 2016</Subtitle>
          <Subtitle>Persiscal Consulting</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>CakePHP</TechListItem>
          <TechListItem>CSS</TechListItem>
          <TechListItem>Bootstrap</TechListItem>
          <TechListItem>MySQL</TechListItem>
          <TechListItem>PHP</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Joined as a freelance full-stack engineer in a small team for an
          educational project using <Strong>CakePHP</Strong>.
        </li>
        <li>
          Used <Strong>MySQL</Strong> for data storing.
        </li>
        <li>
          Used <Strong>CSS</Strong> and <Strong>Bootstrap</Strong> to style the
          contents of the web app.
        </li>
      </Ul>
    </Card>
  );
}

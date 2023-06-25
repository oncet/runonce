import Card from "../Card";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";

export default function Educar2018() {
  return (
    <Card
      title="Tech lead"
      subtitle={
        <>
          <Subtitle>feb 2018 — jul 2018</Subtitle>
          <Subtitle>Educ.ar</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>PHP</TechListItem>
          <TechListItem>Laravel</TechListItem>
          <TechListItem>MySQL</TechListItem>
          <TechListItem>Redis</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Contributed as a technical manager for a series of outsourced
          educational products.
        </li>
        <li>
          Collaborated by defining the software architecture and conducting code
          reviews while interacting with external providers and stakeholders,
          assisting in roadmap planning, and participating in critical client
          meetings.
        </li>
      </Ul>
    </Card>
  );
}

import Card from "../Card";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";

export default function Educar() {
  return (
    <Card
      title="Tech lead"
      subtitle={
        <>
          <Subtitle>sep 2014 — apr 2017</Subtitle>
          <Subtitle>Educ.ar</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>PHP</TechListItem>
          <TechListItem>Laravel</TechListItem>
          <TechListItem>OAuth</TechListItem>
          <TechListItem>Redis</TechListItem>
          <TechListItem>Redis</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Led a team of developers in the migration of a large legacy product to{" "}
          <Strong>Laravel</Strong>, coordinating tasks and ensuring delivery
          without disrupting existing users.
        </li>
        <li>
          Created an <Strong>OAuth</Strong> server in <Strong>Laravel</Strong>,
          implementing industry-standard authentication protocols and
          contributing to the security and scalability of the web application.
        </li>
        <li>
          Maintained legacy systems and implemented <Strong>Redis</Strong> for
          caching, significantly improving application response time and
          reducing server load.
        </li>
        <li>
          Communicated realistic expectations to product managers and owners on
          a regular basis, providing transparency and ensuring alignment between
          project goals and delivery. Organized team and tasks to successfully
          complete projects on time, leveraging agile methodologies and
          effective communication to achieve project milestones.
        </li>
      </Ul>
    </Card>
  );
}

// export default function Educar() {
//   return (
//     <>
//       <Ul>
//         <li>
//           Led a team of developers in the migration of a large legacy product to <Strong>Laravel</Strong>, coordinating tasks and ensuring delivery without disrupting existing users.
//         </li>
//         <li>
//           Created an <Strong>OAuth</Strong> server in <Strong>Laravel</Strong>, implementing industry-standard authentication protocols and contributing to the security and scalability of the web application.
//         </li>
//         <li>
//           Maintained legacy systems and implemented <Strong>Redis</Strong> for caching, significantly improving application response time and reducing server load.
//         </li>
//         <li>
//           Communicated realistic expectations to product managers and owners on a regular basis, providing transparency and ensuring alignment between project goals and delivery. Organized team and tasks to successfully complete projects on time, leveraging agile methodologies and effective communication to achieve project milestones.
//         </li>
//       </Ul>
//     </>
//   );
// }

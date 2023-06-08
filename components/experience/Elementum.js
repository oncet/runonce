import H3 from "../H3";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import Ul from "../Ul";

export default function Elementum() {
  return (
    <>
      <div>
        <H3>Front-end engineer</H3>
        <Subtitle>may 2019 — nov 2020</Subtitle>
        <Subtitle>Elementum</Subtitle>
      </div>
      <Ul>
        <li>
          Worked on the development and maintenance of supply chain management products, contributing to the design and implementation of key features.
        </li>
        <li>
          Collaborated with the Component Library team by adding and maintaining React components using styled-components and Storybook, contributing to a more cohesive design system for the company's products.
        </li>
        <li>
          Optimized React and Webpack configurations to improve app performance, resulting in a ~75% reduction in npm install time and a ~70% improvement in overall Lighthouse score. Contributed to the development and implementation of key optimizations, such as tree shaking, code splitting, and lazy loading.
        </li>
        <li>
          Implemented Module Federation as a potential replacement for an in-house micro frontend solution, exploring and evaluating new technologies to improve the company's front-end architecture.
        </li>
        <li>
          Worked on the development and maintenance of microservices REST APIs using Node.js (Express) and MongoDB.
        </li>
      </Ul>
    </>
  );
}

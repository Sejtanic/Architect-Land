import "./ProjectSectionOne.css";

import { content5 } from "../../../../Content";
const ProjectSectionOne = () => {
  return (
    <section className="project-section-one-style">
      {content5.map((element, index) => {
        return (
          <div
            key={index}
            className="section-one-content"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={element.image} alt="" />
            <h3>{element.lable}</h3>
            <p>{element.content}</p>
          </div>
        );
      })}
    </section>
  );
};
export default ProjectSectionOne;

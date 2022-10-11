import ImageHoverComponent from "../../Components/ImageHoverComponent/ImageHoverComponent";
import "./Projects.css";
import ProjectSectionOne from "./Sections/ProjectsSectionOne/ProjectSectionOne";
import { content, content1, content2, content3, content4 } from "../../Content";
import ImageHoverComponentTwo from "../../Components/ImageHoverComponentTwo/ImageHoverComponentTwo";

const Projects = () => {
  return (
    <div className="projects-style">
      <ProjectSectionOne />
      <ImageHoverComponent content={content} item={"project-one"} />
      <ImageHoverComponentTwo content={content3} item={"project-four"} />
      <ImageHoverComponent content={content1} item={"project-two"} />
      <ImageHoverComponentTwo content={content4} item={"project-five"} />
      <ImageHoverComponent content={content2} item={"project-three"} />
    </div>
  );
};
export default Projects;

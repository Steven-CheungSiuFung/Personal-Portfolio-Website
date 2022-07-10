import ProjectsPreviewList from "../projects-preview-list/projects-preview-list.component";

import { ProjectDetialsSectionContainer } from "./project-detials-section.styles";
import MyText from "../utils/my-text/my-text.component";
import Spacer from "../utils/spacer/spacer.component";

const ProjectDetialsSection = ({ projectData }) => {
  return (
    <ProjectDetialsSectionContainer>
      <MyText size={"2rem"} weight={"500"}>
        Project Detials
      </MyText>
      <Spacer position={"top"} size={"4rem"}></Spacer>
      <ProjectsPreviewList projectData={projectData} />
    </ProjectDetialsSectionContainer>
  );
};

export default ProjectDetialsSection;

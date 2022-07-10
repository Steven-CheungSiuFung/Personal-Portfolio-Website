import ProjectsPreviewList from "../projects-preview-list/projects-preview-list.component";

import { ProjectsSectionContainer } from "./projects-section.styles";
import MyText from "../utils/my-text/my-text.component";
import Spacer from "../utils/spacer/spacer.component";

const ProjectsSection = ({ projectData }) => {
  return (
    <ProjectsSectionContainer>
      <MyText size={"2rem"} weight={"500"}>
        Projects Preview
      </MyText>
      <Spacer position={"top"} size={"4rem"}></Spacer>
      <ProjectsPreviewList projectData={projectData} />
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection;

import ProjectPreviewCard from "../project-preview-card/project-preview-card.component";
import Spacer from "../utils/spacer/spacer.component";

import {
  ProjectsPreviewListContainer,
  ProjectsPreviewListItem,
} from "./projects-preview-list.styles";

const ProjectsPreviewList = ({ projectData }) => {
  const marginDirection = (index) => {
    const isOdd = index % 2;
    if (isOdd) {
      return "left";
    } else {
      return "right";
    }
  };

  return (
    <ProjectsPreviewListContainer>
      {projectData.map((project, index) => (
        <Spacer key={project.id} position={"bottom"} size={"3rem"}>
          <Spacer position={marginDirection(index)} size={"auto"}>
            <ProjectsPreviewListItem>
              <ProjectPreviewCard project={project} index={index} />
            </ProjectsPreviewListItem>
          </Spacer>
        </Spacer>
      ))}
    </ProjectsPreviewListContainer>
  );
};

export default ProjectsPreviewList;

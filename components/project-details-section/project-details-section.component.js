import ProjectsPreviewList from "../projects-preview-list/projects-preview-list.component";
import ProjectDetialsCard from "../project-detials-card/project-detials-card.component";
import ProjectDetialsPageCard from "../project-detials-page-card/project-detials-page-card.component";

import {
  ProjectDetialsSectionContainer,
  ProjectDetialsPagesSectionContainer,
  ProjectDetialsCardPages,
} from "./project-detials-section.styles";
import MyText from "../utils/my-text/my-text.component";
import Spacer from "../utils/spacer/spacer.component";
import { Fragment } from "react";

const ProjectDetialsSection = ({ projectData }) => {
  const imageName = projectData.name.toLowerCase();
  return (
    <Fragment>
      <ProjectDetialsSectionContainer>
        {/*
        <MyText size={"2rem"} weight={"500"}>
          Project Detials
        </MyText>
        <Spacer position={"top"} size={"4rem"}></Spacer>    
    */}

        <ProjectDetialsCard projectData={projectData} />
      </ProjectDetialsSectionContainer>
      <ProjectDetialsPagesSectionContainer>
        <ProjectDetialsCardPages>
          {/*
          <MyText size={"2rem"} weight={"500"}>
            Pages
          </MyText>
          <Spacer position={"top"} size={"0rem"}></Spacer>      
      */}

          {projectData.detials.features.map((item, index) => (
            <ProjectDetialsPageCard
              key={index}
              index={index}
              imageName={imageName}
              item={item}
            />
          ))}
        </ProjectDetialsCardPages>
      </ProjectDetialsPagesSectionContainer>
    </Fragment>
  );
};

export default ProjectDetialsSection;

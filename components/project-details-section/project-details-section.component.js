import { Fragment } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ProjectDetialsCard from "../project-detials-card/project-detials-card.component";
import ProjectDetialsPageCard from "../project-detials-page-card/project-detials-page-card.component";

import {
  ProjectDetialsSectionContainer,
  ProjectDetialsPagesSectionContainer,
  ProjectDetialsCardPages,
  AddPageButton,
} from "./project-detials-section.styles";
import MyText from "../utils/my-text/my-text.component";
import { colors } from "../utils/colors/colors.styles";

const ProjectDetialsSection = ({ projectData, projectId }) => {
  const { data, status } = useSession();
  const authenticated = status === "authenticated";
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

          {projectData.features &&
            projectData.features.map((item, index) => (
              <ProjectDetialsPageCard
                key={index}
                index={index}
                imageName={imageName}
                item={item}
              />
            ))}
        </ProjectDetialsCardPages>
        {authenticated && (
          <AddPageButton>
            <MyText color={colors.main}>
              <Link href={`/projects/add-project/${projectId}`}>ADD-PAGE</Link>
            </MyText>
          </AddPageButton>
        )}
      </ProjectDetialsPagesSectionContainer>
    </Fragment>
  );
};

export default ProjectDetialsSection;

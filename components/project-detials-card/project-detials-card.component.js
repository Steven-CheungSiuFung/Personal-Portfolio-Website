import Image from "next/image";

import MyText from "../utils/my-text/my-text.component";
import Spacer from "../utils/spacer/spacer.component";
import { colors } from "../utils/colors/colors.styles";
import {
  ProjectDetailsCardContainer,
  ProjectDetialsCardMain,
  ProjectDetialsCardMainHeader,
  ProjectDetialsCardMainHeaderContent,
  ProjectTitle,
  ProjectDetialsCardMainHeaderImageWrapper,
  ProjectDetialsCardMainHeaderImage,
  ProjectDetialsCardMainTech,
  ProjectDetialsCardMainTechWrapper,
  ProjectDetialsCardMainTechContent,
} from "./project-details-card.styles";

const ProjectDetialsCard = ({ projectData }) => {
  return (
    <ProjectDetailsCardContainer>
      <ProjectDetialsCardMain>
        <ProjectDetialsCardMainHeader>
          <ProjectDetialsCardMainHeaderContent>
            <ProjectTitle>
              <MyText size={"2rem"} weight={"500"} color={colors.main}>
                {projectData.name}
              </MyText>
            </ProjectTitle>
            <Spacer position={"top"} size={"2rem"} />
            <MyText color={colors.para}>{projectData.description}</MyText>
          </ProjectDetialsCardMainHeaderContent>
          <ProjectDetialsCardMainHeaderImageWrapper>
            <ProjectDetialsCardMainHeaderImage>
              <Image
                src={`/api/images/${projectData.name}`}
                alt={`project-img`}
                layout="fill"
                objectFit="cover"
              />
            </ProjectDetialsCardMainHeaderImage>
          </ProjectDetialsCardMainHeaderImageWrapper>
        </ProjectDetialsCardMainHeader>
        <ProjectDetialsCardMainTech>
          <ProjectDetialsCardMainTechWrapper>
            <MyText size={"1.2rem"} weight={"500"} color={colors.tech}>
              Front-end
            </MyText>
            <Spacer position={"bottom"} size={"1rem"} />
            <ProjectDetialsCardMainTechContent>
              {projectData.frontend.map((item, index) => (
                <Spacer key={index} position={"top"} size={"0.5rem"}>
                  <MyText color={colors.para}>{item}</MyText>
                </Spacer>
              ))}
            </ProjectDetialsCardMainTechContent>
          </ProjectDetialsCardMainTechWrapper>
          <ProjectDetialsCardMainTechWrapper>
            <MyText size={"1.2rem"} weight={"500"} color={colors.tech}>
              Back-end
            </MyText>
            <Spacer position={"bottom"} size={"1rem"} />
            <ProjectDetialsCardMainTechContent>
              {projectData.backend.map((item, index) => (
                <Spacer key={index} position={"top"} size={"0.5rem"}>
                  <MyText color={colors.para}>{item}</MyText>
                </Spacer>
              ))}
            </ProjectDetialsCardMainTechContent>
          </ProjectDetialsCardMainTechWrapper>
        </ProjectDetialsCardMainTech>
      </ProjectDetialsCardMain>
    </ProjectDetailsCardContainer>
  );
};

export default ProjectDetialsCard;

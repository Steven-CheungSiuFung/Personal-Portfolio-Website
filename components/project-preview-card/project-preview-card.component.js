import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MyText from "../utils/my-text/my-text.component";
import Spacer from "../utils/spacer/spacer.component";
import {
  ProjectPreviewCardContainer,
  ProjectPreviewCardImageWrapper,
  ProjectPreviewCardImageContainer,
  ProjectPreviewCardContent,
  ContentTechWrapper,
  TiltContainer,
} from "./project-preview-card.styles";

const ProjectPreviewCard = ({ project, index }) => {
  const [isMediumWidth, setIsMediumWidth] = useState(false);
  const isOdd = index % 2;
  const windowWidthRef = useRef();

  const getyDirection = (isOdd) => {
    const xDirection = isOdd ? "-" : "";
    return xDirection;
  };

  const getXDirection = (isOdd) => {
    const xDirection = isOdd ? "" : "-";
    return xDirection;
  };

  const updateDimensions = () => {
    windowWidthRef.current = window.innerWidth;
    if (windowWidthRef.current < 760) {
      setIsMediumWidth(true);
    } else if (windowWidthRef.current > 760) {
      setIsMediumWidth(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <TiltContainer className="Tilt" options={{ max: 25 }}>
      <div className="Tilt-inner">
        <ProjectPreviewCardContainer
          xDirection={getXDirection(isOdd)}
          yDirection={getyDirection(isOdd)}
        >
          {(!isOdd || isMediumWidth) && (
            <ProjectPreviewCardImageWrapper>
              <ProjectPreviewCardImageContainer>
                <Image
                  src={`/images/hotels-booking.png`}
                  alt={`project-img`}
                  layout="fill"
                  objectFit="cover"
                />
              </ProjectPreviewCardImageContainer>
            </ProjectPreviewCardImageWrapper>
          )}
          <ProjectPreviewCardContent>
            <MyText size={"1.5rem"} weight={"500"}>
              {project.name.toUpperCase()}
            </MyText>
            <MyText size={"1rem"} weight={"400"}>
              {project.description}
            </MyText>
            <ContentTechWrapper>
              {project.tech.map((tech, index) => (
                <Spacer key={index} position={"right"} size={"1rem"}>
                  <MyText size={"0.8rem"} weight={"400"}>
                    {tech}
                  </MyText>
                </Spacer>
              ))}
            </ContentTechWrapper>
          </ProjectPreviewCardContent>
          {isOdd && !isMediumWidth ? (
            <ProjectPreviewCardImageWrapper>
              <ProjectPreviewCardImageContainer>
                <Image
                  src={`/images/hotels-booking.png`}
                  alt={`project-img`}
                  layout="fill"
                  objectFit="cover"
                />
              </ProjectPreviewCardImageContainer>
            </ProjectPreviewCardImageWrapper>
          ) : null}
        </ProjectPreviewCardContainer>
      </div>
    </TiltContainer>
  );
};

export default ProjectPreviewCard;

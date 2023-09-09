import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { cloudName } from "../../lib/cloudinary/cloudinary";
import MyText from "../utils/my-text/my-text.component";
import Spacer from "../utils/spacer/spacer.component";
import { colors } from "../utils/colors/colors.styles";
import {
  ProjectPreviewCardContainer,
  ProjectPreviewCardImageWrapper,
  ProjectPreviewCardImageContainer,
  ProjectPreviewCardContent,
  ContentTechWrapper,
  TechAndDetailContainer,
  TiltContainer,
} from "./project-preview-card.styles";

const ProjectPreviewCard = ({ project, index }) => {
  const router = useRouter();
  const [isMediumWidth, setIsMediumWidth] = useState(false);
  const isOdd = index % 2;
  const windowWidthRef = useRef();
  const cardRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

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
    if (windowWidthRef.current <= 860) {
      setIsMediumWidth(true);
    } else if (windowWidthRef.current > 860) {
      setIsMediumWidth(false);
    }
  };

  useEffect(() => {
    if (!cardRef.current) {
      return;
    }
    gsap.from(cardRef.current, {
      scrollTrigger: cardRef.current,
      duration: 1,
      opacity: 0,
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    });
    gsap.to(cardRef.current, {
      scrollTrigger: cardRef.current,
      duration: 1,
      opacity: 1,
      transform: `perspective(1000px) rotateX(0deg) rotateY(${getyDirection(
        isOdd
      )}4.5deg)  scale3d(1, 1, 1)`,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    updateDimensions();
  }, []);

  const onClickHandler = (event) => {
    event.preventDefault();
    const pathName = `/projects/${project.id}`;
    router.push(pathName);
  };

  return (
    <TiltContainer className="Tilt" options={{ max: 25 }}>
      <div className="Tilt-inner">
        <ProjectPreviewCardContainer
          xDirection={getXDirection(isOdd)}
          yDirection={getyDirection(isOdd)}
          ref={cardRef}
          onClick={onClickHandler}
        >
          {(!isOdd || isMediumWidth) && (
            <ProjectPreviewCardImageWrapper>
              <ProjectPreviewCardImageContainer>
                <Image
                  src={`https://res.cloudinary.com/${cloudName}/image/upload/w_840,h_540,q_100/${project.image}.png`}
                  alt={`project-img`}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </ProjectPreviewCardImageContainer>
            </ProjectPreviewCardImageWrapper>
          )}
          <ProjectPreviewCardContent>
            <MyText size={"1.5rem"} weight={"500"} color={colors.tech}>
              {project.name.toUpperCase()}
            </MyText>
            <MyText size={"1rem"} weight={"400"} color={colors.para}>
              {project.description}
            </MyText>
            <TechAndDetailContainer>
              <ContentTechWrapper>
                {project.tech.map((tech, index) => (
                  <Spacer key={index} position={"right"} size={"1rem"}>
                    <MyText
                      size={"0.8rem"}
                      weight={"400"}
                      color={colors.subTitle}
                      opacity={0.8}
                    >
                      {tech}
                    </MyText>
                  </Spacer>
                ))}
              </ContentTechWrapper>
              <MyText
                size={"0.8rem"}
                weight={"400"}
                color={colors.tech}
                opacity={0.8}
              >
                show more details
              </MyText>
            </TechAndDetailContainer>
          </ProjectPreviewCardContent>
          {isOdd && !isMediumWidth ? (
            <ProjectPreviewCardImageWrapper>
              <ProjectPreviewCardImageContainer>
                <Image
                  src={`https://res.cloudinary.com/${cloudName}/image/upload/w_840,h_540,q_100/${project.image}.png`}
                  alt={`project-img`}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
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

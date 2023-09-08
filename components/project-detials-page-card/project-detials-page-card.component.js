import Image from "next/legacy/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { cloudName } from "../../lib/cloudinary/cloudinary";
import MyText from "../utils/my-text/my-text.component";
import { glassmorphism } from "../utils/glassmorphism/glassmorphism.styles";
import { colors } from "../utils/colors/colors.styles";
import {
  ProjectDetialsPageCardContainer,
  ProjectDetialsPageCardImageWrapper,
  ProjectDetialsPageCardImageContainer,
  ProjectDetialsPageCardContent,
} from "./project-detials-page-card.styles";

const ProjectDetialsPageCard = ({ item, index }) => {
  const [isMediumWidth, setIsMediumWidth] = useState(false);
  const isOdd = index % 2;
  const background = true ? glassmorphism.secondary : glassmorphism.primary;
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
    if (windowWidthRef.current < 1200) {
      setIsMediumWidth(true);
    } else if (windowWidthRef.current > 1200) {
      setIsMediumWidth(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    updateDimensions();
  }, []);

  return (
    <ProjectDetialsPageCardContainer
      xDirection={getXDirection(isOdd)}
      yDirection={getyDirection(isOdd)}
      ref={cardRef}
      background={background}
    >
      {(!isOdd || isMediumWidth) && (
        <ProjectDetialsPageCardImageWrapper>
          <ProjectDetialsPageCardImageContainer>
            <Image
              src={`https://res.cloudinary.com/${cloudName}/image/upload/w_840,h_540,q_100/${item.image}.png`}
              alt={`project-img`}
              layout="fill"
              objectFit="cover"
            />
          </ProjectDetialsPageCardImageContainer>
        </ProjectDetialsPageCardImageWrapper>
      )}
      <ProjectDetialsPageCardContent>
        <MyText size={"1.5rem"} weight={"500"} color={colors.tech}>
          {item.page.toUpperCase()}
        </MyText>
        {item.content.map((item, index) => (
          <MyText key={index} size={"1rem"} weight={"400"} color={colors.para}>
            {item}
          </MyText>
        ))}
      </ProjectDetialsPageCardContent>
      {isOdd && !isMediumWidth ? (
        <ProjectDetialsPageCardImageWrapper>
          <ProjectDetialsPageCardImageContainer>
            <Image
              src={`https://res.cloudinary.com/${cloudName}/image/upload/w_840,h_540,q_100/${item.image}.png`}
              alt={`project-img`}
              layout="fill"
              objectFit="cover"
            />
          </ProjectDetialsPageCardImageContainer>
        </ProjectDetialsPageCardImageWrapper>
      ) : null}
    </ProjectDetialsPageCardContainer>
  );
};

export default ProjectDetialsPageCard;

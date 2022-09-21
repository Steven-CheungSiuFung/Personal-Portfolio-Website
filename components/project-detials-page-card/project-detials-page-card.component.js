import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MyText from "../utils/my-text/my-text.component";
import Spacer from "../utils/spacer/spacer.component";
import { glassmorphism } from "../utils/glassmorphism/glassmorphism.styles";
import { colors } from "../utils/colors/colors.styles";
import {
  ProjectDetialsPageCardContainer,
  ProjectDetialsPageCardImageWrapper,
  ProjectDetialsPageCardImageContainer,
  ProjectDetialsPageCardContent,
  TiltContainer,
} from "./project-detials-page-card.styles";

const ProjectDetialsPageCard = ({ item, index, imageName }) => {
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

  //   useEffect(() => {
  //     if (!cardRef.current) {
  //       return;
  //     }
  //     gsap.from(cardRef.current, {
  //       scrollTrigger: cardRef.current,
  //       duration: 1,
  //       opacity: 0,
  //       transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
  //     });
  //     gsap.to(cardRef.current, {
  //       scrollTrigger: cardRef.current,
  //       duration: 1,
  //       opacity: 1,
  //       transform: `perspective(1000px) rotateX(0deg) rotateY(${getyDirection(
  //         isOdd
  //       )}4.5deg)  scale3d(1, 1, 1)`,
  //     });
  //   }, []);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    updateDimensions();
  }, []);

  return (
    // {    <TiltContainer className="Tilt" options={{ max: 25 }}>
    //       <div className="Tilt-inner">}
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
              src={`/api/images/page/${item._id}`}
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
              src={`/api/images/page/${item._id}`}
              alt={`project-img`}
              layout="fill"
              objectFit="cover"
            />
          </ProjectDetialsPageCardImageContainer>
        </ProjectDetialsPageCardImageWrapper>
      ) : null}
    </ProjectDetialsPageCardContainer>
    // {      </div>
    //     </TiltContainer>}
  );
};

export default ProjectDetialsPageCard;

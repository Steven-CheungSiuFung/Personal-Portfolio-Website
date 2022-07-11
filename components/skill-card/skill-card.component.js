import Image from "next/image";

import MyText from "../utils/my-text/my-text.component";
import {
  SkillCardContainer,
  SkillCardImageContainer,
  TiltContainer,
} from "./skill-card.styles";
import Spacer from "../utils/spacer/spacer.component";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { colors } from "../utils/colors/colors.styles";

const SkillCard = ({ item }) => {
  const skillTitle = item.title[0].toUpperCase() + item.title.slice(1);
  const skillImageName = item.title.toLowerCase();
  const description = item.description;

  const cardRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!cardRef.current) {
      return;
    }
    gsap.from(cardRef.current, {
      scrollTrigger: cardRef.current,
      duration: 1,
      opacity: 0,
      x: "random(-200, 200)",
    });
    gsap.to(cardRef.current, {
      scrollTrigger: cardRef.current,
      duration: 1,
      opacity: 1,
      x: 0,
    });
  }, []);

  return (
    <TiltContainer className="Tilt" options={{ max: 25 }}>
      <div className="Tilt-inner">
        <SkillCardContainer ref={cardRef}>
          <SkillCardImageContainer>
            <Image
              src={`/images/${skillImageName}.png`}
              alt={`${item.title}-logo`}
              layout="fill"
              objectFit="contain"
            />
          </SkillCardImageContainer>

          <Spacer position={"top"} size={"2rem"} />
          <MyText size={"1.2rem"} weight={"500"} color={colors.subTitle}>
            {skillTitle}
          </MyText>
          <Spacer position={"top"} size={"0.3rem"} />
          <MyText
            size={"0.8rem"}
            weight={"400"}
            color={"rgba(209, 213, 219, 0.5)"}
          >
            {description}
          </MyText>
        </SkillCardContainer>
      </div>
    </TiltContainer>
  );
};

export default SkillCard;

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

const SkillCard = ({ item }) => {
  const skillTitle = item[0].toUpperCase() + item.slice(1);
  const skillImageName = item.toLowerCase();

  const titleRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!titleRef.current) {
      return;
    }
    gsap.from(titleRef.current, {
      scrollTrigger: titleRef.current,
      duration: 1,
      opacity: 0,
      x: -150,
    });
    gsap.to(titleRef.current, {
      scrollTrigger: titleRef.current,
      duration: 1,
      opacity: 1,
      x: 0,
    });
  }, []);

  return (
    <TiltContainer className="Tilt" options={{ max: 25 }}>
      <div className="Tilt-inner">
        <SkillCardContainer ref={titleRef}>
          <SkillCardImageContainer>
            <Image
              src={`/images/${skillImageName}.png`}
              alt={`${item}-logo`}
              layout="fill"
              objectFit="contain"
            />
          </SkillCardImageContainer>

          <Spacer position={"top"} size={"1.5rem"} />
          <MyText size={"1.5rem"} weight={"500"}>
            {skillTitle}
          </MyText>
        </SkillCardContainer>
      </div>
    </TiltContainer>
  );
};

export default SkillCard;

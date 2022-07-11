import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import {
  AboutMeSectionContainer,
  AboutMeContentContainer,
  AboutMeTextWrapper,
} from "./about-me-section.styles";

import MyText from "../utils/my-text/my-text.component";
import Spacer from "../utils/spacer/spacer.component";

const AboutMeSection = () => {
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
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(0.6, 0.6, 0.6)`,
    });
    gsap.to(cardRef.current, {
      scrollTrigger: cardRef.current,
      duration: 1,
      opacity: 1,
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    });
  }, []);
  return (
    <AboutMeSectionContainer>
      <MyText size={"2rem"} weight={"500"}>
        About Me
      </MyText>
      <Spacer position={"top"} size={"4rem"}></Spacer>

      <AboutMeContentContainer ref={cardRef}>
        <AboutMeTextWrapper>
          <MyText size={"1rem"} weight={"400"} opacity={0.9}>
            Hi, my name is Cheung Siu Fung, or just call me Steven. I am a
            self-taught programmer mainly focus on web development, also
            experience on moblie app development.
          </MyText>
          <Spacer position={"top"} size={"1rem"} />
          <MyText size={"1rem"} weight={"400"} opacity={0.9}>
            I started learning programming when I was dealing with some data in
            my work. I tried to find a lazy way to automate the process
            perfectly😂, and I finally do it with python. In the process, I find
            my self really enjoy coding and building program work exactly as
            designed.
          </MyText>
          <Spacer position={"top"} size={"1rem"} />
          <MyText size={"1rem"} weight={"400"} opacity={0.9}>
            Afterward I started to learn web dev while building a web scraper,
            and it opens up a whole new world for me. I dive into web
            development from front-end to back-end, building fully functional
            application, and keep improving my skills everyday.
          </MyText>
          <Spacer position={"top"} size={"1rem"} />
          <MyText size={"1rem"} weight={"400"} opacity={0.9}>
            As a sci-fi fans, I like watching sci-fi movies, playing video
            games, and other technical stuff. I also like traveling and take
            some random photo, I wish someday can travel to Mars and take a
            picture.
          </MyText>
        </AboutMeTextWrapper>
      </AboutMeContentContainer>
    </AboutMeSectionContainer>
  );
};

export default AboutMeSection;

import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

import MyText from "../utils/my-text/my-text.component";
import Spacer from "../utils/spacer/spacer.component";

import {
  GreetingSectionContainer,
  GreetingWordContainer,
  IntroductionContainer,
} from "./greeting-section.styles";

const GreetingSection = () => {
  useEffect(() => {
    gsap.from(".greeting", {
      opacity: 0,
      duration: 1,
    });
    gsap.to(".greeting", {
      opacity: 1,
      duration: 2,
      animationDelay: "0.5s",
    });

    gsap.from(".greeting-fade-in", {
      opacity: 0,
      duration: 2,
    });
    gsap.to(".greeting-fade-in", {
      opacity: 1,
      duration: 2,
      animationDelay: "0.5",
    });
  }, []);
  return (
    <GreetingSectionContainer>
      <GreetingWordContainer className="greeting">
        <MyText size={"3rem"} weight={"500"}>
          👋 Hellooo!!
        </MyText>
      </GreetingWordContainer>

      <Spacer position={"top"} size={"0.5rem"} />

      <IntroductionContainer className="greeting-fade-in">
        <MyText size={"3rem"} weight={"500"}>
          I{"'"}m Steven Cheung
        </MyText>
        <MyText size={"1.5rem"} weight={"500"} color={"gray"}>
          A Full Stack Web Developer
        </MyText>
      </IntroductionContainer>
    </GreetingSectionContainer>
  );
};

export default GreetingSection;

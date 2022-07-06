import MyText from "../utils/my-text/my-text.component";

import {
  GreetingSectionContainer,
  GreetingWordContainer,
  IntroductionContainer,
} from "./greeting-section.styles";
import Spacer from "../utils/spacer/spacer.component";

const GreetingSection = () => {
  return (
    <GreetingSectionContainer>
      <Spacer position={"right"} size={"25rem"}>
        <GreetingWordContainer>
          <MyText size={"3rem"} weight={"500"}>
            Hellooo!!
          </MyText>
        </GreetingWordContainer>
      </Spacer>
      <Spacer position={"top"} size={"0.5rem"} />
      <Spacer position={"left"} size={"5rem"}>
        <IntroductionContainer>
          <MyText size={"3rem"} weight={"500"}>
            I{"'"}m Steven Cheung
          </MyText>
          <MyText size={"1.5rem"} weight={"500"} color={"gray"}>
            A Full Stack Web Developer
          </MyText>
        </IntroductionContainer>
      </Spacer>
    </GreetingSectionContainer>
  );
};

export default GreetingSection;

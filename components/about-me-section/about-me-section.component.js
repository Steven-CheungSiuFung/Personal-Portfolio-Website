import { AboutMeSectionContainer } from "./about-me-section.styles";
import MyText from "../utils/my-text/my-text.component";

const AboutMeSection = () => {
  return (
    <AboutMeSectionContainer>
      <MyText size={"2rem"} weight={"500"}>
        About Me
      </MyText>
    </AboutMeSectionContainer>
  );
};

export default AboutMeSection;

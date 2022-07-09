import {
  AboutMeSectionContainer,
  AboutMeContentContainer,
  AboutMeTextWrapper,
} from "./about-me-section.styles";
import MyText from "../utils/my-text/my-text.component";
import Spacer from "../utils/spacer/spacer.component";

const AboutMeSection = () => {
  return (
    <AboutMeSectionContainer>
      <MyText size={"2rem"} weight={"500"}>
        About Me
      </MyText>
      <Spacer position={"top"} size={"4rem"}></Spacer>

      <AboutMeContentContainer>
        <AboutMeTextWrapper>
          <MyText size={"1rem"} weight={"400"}>
            Hi, my name is Cheung Siu Fung, or just call me Steven. I am a
            self-taught programmer mainly focus on web development, also
            experience on moblie app development.
          </MyText>
          <Spacer position={"top"} size={"1rem"} />
          <MyText size={"1rem"} weight={"400"}>
            I started learning programming when I was dealing with some data in
            my work. I tried to find the lazy way to automate the process
            perfectly😂, and I finally do it with python. In the process, I find
            my self really enjoy coding and building program work exactly as
            designed.
          </MyText>
          <Spacer position={"top"} size={"1rem"} />
          <MyText size={"1rem"} weight={"400"}>
            Afterward I started to learn web dev while building a web scraper,
            and it opens up a whole new world for me. I dive into web
            development from front-end to back-end, building fully functional
            application, and keep improving my skills everyday.
          </MyText>
          <Spacer position={"top"} size={"1rem"} />
          <MyText size={"1rem"} weight={"400"}>
            As a sci-fi fans, I like watching sci-fi movies and playing video
            games, also interesting in other technical stuff. Of course,
            including programming.
          </MyText>
        </AboutMeTextWrapper>
      </AboutMeContentContainer>
    </AboutMeSectionContainer>
  );
};

export default AboutMeSection;

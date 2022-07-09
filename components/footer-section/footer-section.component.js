import MyText from "../utils/my-text/my-text.component";
import {
  FooterSectionContainer,
  SocialLinksContainer,
  SocialLinkWrapper,
} from "./footer-section.styles";
import { AiFillGithub } from "react-icons/ai";
import { colors } from "../utils/colors/colors.styles";

const FooterSection = () => {
  const handleGithubonClick = (event) => {
    event.preventDefault();
    window.open("https://github.com/Steven-CheungSiuFung", "_blank");
  };
  return (
    <FooterSectionContainer>
      <SocialLinksContainer>
        <SocialLinkWrapper>
          <MyText size={"2rem"}>
            <AiFillGithub onClick={handleGithubonClick} />
          </MyText>
          <MyText size={"0.8rem"} color={colors.caption}>
            @Steven-CheungSiuFung
          </MyText>
        </SocialLinkWrapper>
      </SocialLinksContainer>
    </FooterSectionContainer>
  );
};

export default FooterSection;

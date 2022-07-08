import Link from "next/link";
import MyText from "../utils/my-text/my-text.component";

import {
  NavigationBarContainer,
  HomeLogoContainer,
  NavLinkList,
  NavLinkItem,
} from "./navigation-bar.styles";
import Spacer from "../utils/spacer/spacer.component";

const NavigationBar = () => {
  return (
    <NavigationBarContainer>
      <HomeLogoContainer>
        <MyText>
          <Link href="/">Home</Link>
        </MyText>
      </HomeLogoContainer>
      <Spacer position={"right"} size={"0"}></Spacer>

      <NavLinkList>
        <NavLinkItem>
          <MyText>
            <Link href="/projects">Projects</Link>
          </MyText>
        </NavLinkItem>
        <NavLinkItem>
          <MyText>
            <Link href="/three-d">3D-mode</Link>
          </MyText>
        </NavLinkItem>
      </NavLinkList>
    </NavigationBarContainer>
  );
};

export default NavigationBar;

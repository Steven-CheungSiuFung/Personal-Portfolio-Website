import Link from "next/link";

import {
  NavigationBarContainer,
  HomeLogoContainer,
  HomeLogoLink,
  NavLinkList,
  NavLinkItem,
} from "./navigation-bar.styles";
import Spacer from "../utils/spacer/spacer.component";

const NavigationBar = () => {
  return (
    <NavigationBarContainer>
      <HomeLogoContainer>
        <Link href="/">Home</Link>
      </HomeLogoContainer>
      <Spacer position={"right"} size={"0"}></Spacer>

      <NavLinkList>
        <NavLinkItem>
          <Link href="/projects">Projects</Link>
        </NavLinkItem>
        <NavLinkItem>
          <Link href="/three-d">3D-mode</Link>
        </NavLinkItem>
      </NavLinkList>
    </NavigationBarContainer>
  );
};

export default NavigationBar;

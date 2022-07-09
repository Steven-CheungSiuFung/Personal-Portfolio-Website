import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import MyText from "../utils/my-text/my-text.component";

import {
  NavigationBarContainer,
  HomeLogoContainer,
  NavLinkList,
  NavLinkItem,
  NavListToggleIcon,
  SmallScreenNavList,
  SmallScreenNavItem,
} from "./navigation-bar.styles";
import Spacer from "../utils/spacer/spacer.component";

const NavigationBar = () => {
  const winWidthRef = useRef();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isToggleListOpen, setIsToggleListOpen] = useState(false);

  const updateDimensions = () => {
    winWidthRef.current = window.innerWidth;
    if (winWidthRef.current < 760) {
      setIsSmallScreen(true);
    } else if (winWidthRef.current > 760) {
      setIsSmallScreen(false);
    }
  };

  const handleListToggle = (event) => {
    event.preventDefault();
    setIsToggleListOpen(!isToggleListOpen);
  };

  useEffect(() => {
    const winWidth = window.innerWidth;
    if (winWidth < 760) {
      setIsSmallScreen(true);
    } else if (winWidth > 760) {
      setIsSmallScreen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <NavigationBarContainer>
      <HomeLogoContainer>
        <Link href="/">
          <Image
            src={"/images/steven.png"}
            alt={"logo"}
            width={80}
            height={80}
          />
        </Link>
      </HomeLogoContainer>
      {!isSmallScreen ? (
        <Fragment>
          <Spacer position={"right"} size={"10rem"}></Spacer>
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
        </Fragment>
      ) : (
        <Fragment>
          <NavListToggleIcon onClick={handleListToggle}>
            <MyText size={"2rem"}>
              <TiThMenu />
            </MyText>
          </NavListToggleIcon>
          {isToggleListOpen && (
            <SmallScreenNavList>
              <SmallScreenNavItem>
                <MyText>
                  <Link href="/projects">Projects</Link>
                </MyText>
              </SmallScreenNavItem>
              <SmallScreenNavItem>
                <MyText>
                  <Link href="/three-d">3D-mode</Link>
                </MyText>
              </SmallScreenNavItem>
            </SmallScreenNavList>
          )}
        </Fragment>
      )}
    </NavigationBarContainer>
  );
};

export default NavigationBar;

import { Fragment, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
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
  const { data, status } = useSession();

  const authenticated = status === "authenticated";
  const loading = status === "loading";

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

  const logoutHandler = () => {
    signOut();
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
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </Link>
      </HomeLogoContainer>
      {!isSmallScreen ? (
        <Fragment>
          <Spacer position={"right"} size={"10rem"}></Spacer>
          <NavLinkList>
            <NavLinkItem>
              <MyText>
                <Link href="/projects">PROJECTS</Link>
              </MyText>
            </NavLinkItem>
            {/*            <NavLinkItem>
              <MyText>
                <Link href="/three-d">3D-MODE</Link>
              </MyText>
      </NavLinkItem>*/}
            {!authenticated ? (
              <NavLinkItem>
                <MyText>
                  <Link href="/user/login">LOGIN</Link>
                </MyText>
              </NavLinkItem>
            ) : (
              <Fragment>
                <NavLinkItem>
                  <MyText>
                    <Link href="/projects/add-project">ADD-PROJECT</Link>
                  </MyText>
                </NavLinkItem>
                <NavLinkItem onClick={logoutHandler}>
                  <MyText>LOGOUT</MyText>
                </NavLinkItem>
              </Fragment>
            )}
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
                  <Link href="/projects">PROJECTS</Link>
                </MyText>
              </SmallScreenNavItem>
              <SmallScreenNavItem>
                <MyText>
                  <Link href="/three-d">3D-MODE</Link>
                </MyText>
              </SmallScreenNavItem>
              {!authenticated ? (
                <SmallScreenNavItem>
                  <MyText>
                    <Link href="/user/login">LOGIN</Link>
                  </MyText>
                </SmallScreenNavItem>
              ) : (
                <SmallScreenNavItem onClick={logoutHandler}>
                  <MyText>LOGOUT</MyText>
                </SmallScreenNavItem>
              )}
            </SmallScreenNavList>
          )}
        </Fragment>
      )}
    </NavigationBarContainer>
  );
};

export default NavigationBar;

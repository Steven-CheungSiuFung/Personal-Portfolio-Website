import styled from "styled-components";
import { glassmorphism } from "../utils/glassmorphism/glassmorphism.styles";

export const NavigationBarContainer = styled.section`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin-top: -10px;
  padding: 0rem 0 1rem 0;
  box-shadow: 0px -10px 15px 1px grey;

  @media screen and (max-width: 760px) {
    & {
      justify-content: space-between;
      padding: 0 2rem 1rem 2rem;
    }
  }
`;

export const HomeLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: relative;
  top: 20px;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const NavLinkList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: baseline;
  list-style-type: none;
`;

export const NavLinkItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding-left: 2rem;
  cursor: pointer;
`;

export const NavListToggleIcon = styled.div`
  display: flex;
  cursor: pointer;
  z-index: 2;
`;

export const SmallScreenNavList = styled.div`
  position: absolute;
  top: 110px;
  right: 0;
  width: 100%;
  height: 41.6%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 0;
  ${glassmorphism.primary}
`;

export const SmallScreenNavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  ${glassmorphism.primary}
`;

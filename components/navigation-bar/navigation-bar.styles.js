import styled from "styled-components";

export const NavigationBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  padding: 1.6rem 0 0.8rem 0;
  box-shadow: 0px -10px 15px 1px grey;
`;

export const HomeLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-size: 1.6rem;
  font-weight: 500;
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
`;

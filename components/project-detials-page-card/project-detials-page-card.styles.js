import styled from "styled-components";
import Tilt from "react-tilt";

const imageHeight = 270;
const imageWidth = 420;

export const ProjectDetialsPageCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem;
  box-shadow: ${(props) => props.xDirection}3px 1px 10px -5px gray;
  cursor: pointer;
  ${(props) => props.background}

  @media screen and (max-width: 1280px) {
    & {
      flex-direction: column;
      padding-top: 1rem;
    }
  }
`;

export const ProjectDetialsPageCardImageWrapper = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const ProjectDetialsPageCardImageContainer = styled.div`
  width: ${imageWidth}px;
  height: ${imageHeight}px;
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 650px) {
    & {
      width: ${imageWidth * 0.8}px;
      height: ${imageHeight * 0.8}px;
    }
  }
`;

export const ProjectDetialsPageCardContent = styled.div`
  height: ${imageHeight}px;
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  padding: 2rem 3rem;

  @media screen and (max-width: 1280px) {
    & {
      padding: 4rem 2rem;
      align-items: center;
      flex: auto;
      text-align: center;
      gap: 1rem;
    }
  }

  @media screen and (max-width: 650px) {
    & {
      padding: 2rem 1rem;
      align-items: center;
      flex: auto;
      text-align: center;
      height: ${imageHeight * 1.1}px;
    }
  }
`;

export const TiltContainer = styled(Tilt)`
  height: 100%;
  width: 100%;
`;

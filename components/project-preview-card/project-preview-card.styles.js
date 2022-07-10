import styled from "styled-components";
import Tilt from "react-tilt";

const imageHeight = 270;
const imageWidth = 420;

export const ProjectPreviewCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem;
  box-shadow: ${(props) => props.xDirection}3px 1px 10px -5px gray;
  cursor: pointer;

  @media screen and (max-width: 860px) {
    & {
      flex-direction: column;
    }
  }
`;

export const ProjectPreviewCardImageWrapper = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const ProjectPreviewCardImageContainer = styled.div`
  width: ${imageWidth}px;
  height: ${imageHeight}px;
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 450px) {
    & {
      width: ${imageWidth * 0.8}px;
      height: ${imageHeight * 0.8}px;
    }
  }
`;

export const ProjectPreviewCardContent = styled.div`
  height: ${imageHeight}px;
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2rem;

  @media screen and (max-width: 860px) {
    & {
      padding: 4rem 4rem;
      align-items: center;
      flex: auto;
      text-align: center;
    }
  }

  @media screen and (max-width: 450px) {
    & {
      padding: 2rem 1rem;
      align-items: center;
      flex: auto;
      text-align: center;
    }
  }
`;

export const ContentTechWrapper = styled.div`
  display: flex;
`;

export const TiltContainer = styled(Tilt)`
  height: 100%;
  width: 100%;
`;

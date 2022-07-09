import styled from "styled-components";
import Tilt from "react-tilt";

const imageHeight = "270px";
const imageWidth = "360px";

export const ProjectPreviewCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem;
  box-shadow: ${(props) => props.xDirection}3px 1px 10px -5px gray;

  @media screen and (max-width: 760px) {
    & {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 430px) {
    & {
      position: relative;
      right: 20px;
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
  width: ${imageWidth};
  height: ${imageHeight};
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

export const ProjectPreviewCardContent = styled.div`
  height: ${imageHeight};
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2rem;

  @media screen and (max-width: 760px) {
    & {
      padding: 4rem 4rem;
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

import styled from "styled-components";
import { glassmorphism } from "../utils/glassmorphism/glassmorphism.styles";

const imageWidth = "400px";
const imageHeight = "247px";

export const ProjectDetailsCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectDetialsCardMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectDetialsCardMainHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  ${glassmorphism.primary}

  @media screen and (max-width: 1000px) {
    & {
      flex-direction: column;
      padding: 1rem 5% 2rem 5%;
      gap: 2rem;
    }
  }

  @media screen and (max-width: 680px) {
    & {
      padding: 1.5rem 0;
    }
  }
`;

export const ProjectDetialsCardMainHeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex: 3;
  flex-direction: column;
  padding: 2rem 2.5rem;

  @media screen and (max-width: 1000px) {
    & {
      align-items: center;
    }
  }
`;

export const ProjectTitle = styled.div`
  display: flex;
`;

export const ProjectDetialsCardMainHeaderImageWrapper = styled.div`
  display: flex;
  flex: 2;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  transform: perspective(1000px) rotateY(-4.5deg);
`;

export const ProjectDetialsCardMainHeaderImage = styled.div`
  width: ${imageWidth};
  height: ${imageHeight};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 0px 10px 3px gray;
`;

export const ProjectDetialsCardMainTech = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${glassmorphism.primary}

  @media screen and (max-width: 660px) {
    & {
      flex-direction: column;
      padding: 1.5rem 0;
      gap: 1.5rem;
    }
  }
`;

export const ProjectDetialsCardMainTechWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const ProjectDetialsCardMainTechContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 860px) {
    & {
      width: 100%;
    }
  }
`;

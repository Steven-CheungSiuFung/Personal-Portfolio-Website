import styled from "styled-components";
import { glassmorphism } from "../utils/glassmorphism/glassmorphism.styles";

export const ProjectDetialsSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 15%;
  box-shadow: 0px -5px 10px -10px grey;

  @media screen and (max-width: 1200px) {
    & {
      padding: 6rem 10%;
    }
  }

  @media screen and (max-width: 1080px) {
    & {
      padding: 6rem 5%;
    }
  }
`;

export const ProjectDetialsPagesSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 15%;
  box-shadow: 0px -5px 10px -10px grey;

  @media screen and (max-width: 650px) {
    & {
      padding: 6rem 5%;
    }
  }
`;

export const ProjectDetialsCardPages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const AddPageButton = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  margin-top: 4rem;
  ${glassmorphism.secondary}
`;

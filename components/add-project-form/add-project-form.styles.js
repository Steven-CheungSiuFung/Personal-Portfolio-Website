import styled from "styled-components";
import { glassmorphism } from "../utils/glassmorphism/glassmorphism.styles";
import { colors } from "../utils/colors/colors.styles";

const imageWidth = "400px";
const imageHeight = "247px";

export const AddProjectFormContainer = styled.form`
  width: 100%;
  padding: 2rem;
  ${glassmorphism.primary};
  backdrop-filter: blur(1px) saturate(100%);
`;

export const FormTitleContainer = styled.div`
  text-align: center;
`;

export const ProjectTitleImageContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const ProjectTitleWrapper = styled.div`
  flex: 3;
`;

export const UploadImageButtton = styled.label`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  color: ${colors.tech};
  ${glassmorphism.primary};

  &:hover {
    color: ${colors.main};
  }
`;

export const ProjectImageWrapeer = styled.div`
  width: ${imageWidth};
  height: ${imageHeight};
  display: flex;
  flex: 2;
  position: relative;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 0px 10px 3px gray;
`;

export const TechStackContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const TechStackContentButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 1.8rem;
`;

export const TechStackContentButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TechStackContentWrapper = styled.div`
  width: 100%;
`;

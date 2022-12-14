import styled from "styled-components";
import { glassmorphism } from "../utils/glassmorphism/glassmorphism.styles";

export const AuthSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 15%;
  box-shadow: 0px -5px 10px -10px gray;

  @media screen and (max-width: 450px) {
    & {
      padding: 6rem 5%;
    }
  }
`;

export const AuthForm = styled.form`
  width: 50%;
  padding: 2rem;
  ${glassmorphism.primary};

  @media screen and (max-width: 1080px) {
    & {
      width: 80%;
    }
  }

  @media screen and (max-width: 760px) {
    & {
      width: 100%;
    }
  }
`;

export const ChangeFormHead = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

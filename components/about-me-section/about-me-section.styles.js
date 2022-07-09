import styled from "styled-components";

export const AboutMeSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 15%;
  box-shadow: 0px -5px 10px -10px gray;

  @media screen and (max-width: 900px) {
    & {
      padding: 4rem 5%;
    }
  }
`;

export const AboutMeContentContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: rgba(0, 210, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  padding: 6rem;

  @media screen and (max-width: 900px) {
    & {
      padding: 4rem 10%;
    }
  }
`;

export const AboutMeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

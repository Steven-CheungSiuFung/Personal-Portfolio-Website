import styled from "styled-components";

export const ProjectsSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 15%;
  box-shadow: 0px -5px 10px -10px gray;

  @media screen and (max-width: 900px) {
    & {
      padding: 4rem 5%;
    }
  }
`;

import styled from "styled-components";

export const ProjectsSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 15%;
  box-shadow: 0px -5px 10px -10px grey;

  @media screen and (max-width: 1200px) {
    & {
      padding: 4rem 5%;
    }
  }
`;

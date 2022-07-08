import styled from "styled-components";

export const SkillsSectionContainer = styled.section`
  width: 100%;
  padding: 6rem 17% 9rem 17%;
  box-shadow: 0px -5px 10px -10px gray;

  @media screen and (max-width: 760px) {
    & {
      padding: 6rem 12% 9rem 12%;
    }
  }

  @media screen and (max-width: 530px) {
    & {
      padding: 6rem 5% 9rem 5%;
    }
  }
`;

export const SkillsSectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 760px) {
    & {
      flex-direction: column;
    }
  }
`;

export const SkillsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 30px;
  row-gap: 65px;
  grid-auto-rows: 200px;
  justify-content: center;

  @media screen and (max-width: 460px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

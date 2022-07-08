import styled from "styled-components";

export const SkillsSectionContainer = styled.section`
  width: 100%;
  padding: 6rem 17% 9rem 17%;
  box-shadow: 0px -5px 10px -10px gray;
`;

export const SkillsSectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SkillsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 30px;
  row-gap: 65px;
  grid-auto-rows: 200px;
  justify-content: center;
`;

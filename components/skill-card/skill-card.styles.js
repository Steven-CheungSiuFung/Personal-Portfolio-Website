import styled from "styled-components";
import Tilt from "react-tilt";

export const SkillCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 210, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  padding: 2rem 0;
`;

export const SkillCardImageContainer = styled.div`
  width: 100px;
  height: 100px;
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: rgba(209, 213, 219, 0);
  border-radius: 2px;
  box-shadow: 0 0 0 0px rgba(209, 213, 219, 0.3);
`;

export const TiltContainer = styled(Tilt)`
  height: 200px;
  width: 200px;
`;

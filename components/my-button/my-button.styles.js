import styled from "styled-components";
import { colors } from "../utils/colors/colors.styles";

export const BaseButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${colors.primary};
  border: 1px solid ${colors.secondary};
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${colors.tech};

  &:hover {
    color: ${colors.main};
  }
`;

export const SmallButton = styled(BaseButton)`
  width: 50%;
  font-size: 1rem;
`;

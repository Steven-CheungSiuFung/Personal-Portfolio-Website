import styled from "styled-components";
import { colors } from "../colors/colors.styles";

export const CustomText = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  &:hover {
    opacity: 1;
  }
`;

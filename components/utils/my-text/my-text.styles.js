import styled from "styled-components";

export const CustomText = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

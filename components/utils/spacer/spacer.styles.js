import styled from "styled-components";

export const SpacerContainer = styled.div`
display: flex;
    margin-${(props) => props.position}: ${(props) => props.size};
`;

import styled from "styled-components";

export const GreetingSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12rem 0;

  @keyframes greeting {
    20% {
      transform: rotate3d(0, 0, 1, 15deg);
    }

    40% {
      transform: rotate3d(0, 0, 1, -10deg);
    }

    60% {
      transform: rotate3d(0, 0, 1, 5deg);
    }

    80% {
      transform: rotate3d(0, 0, 1, -5deg);
    }

    to {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }

  .greeting {
    transform-origin: top center;
    animation-name: greeting;
    animation-duration: 1s;
  }
`;

export const GreetingWordContainer = styled.div`
  display: flex;
`;

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

import styled from "styled-components";

export const GreetingSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;

  @media screen and (max-width: 450px) {
    & {
      align-items: flex-start;
      padding: 15rem 1.5rem;
    }
  }

  @keyframes greeting {
    20% {
      transform: rotate3d(0, 0, 1, 15deg) scale(1.1, 1.1);
    }

    40% {
      transform: rotate3d(0, 0, 1, -10deg) scale(1.1, 1.1);
    }

    60% {
      transform: rotate3d(0, 0, 1, 5deg) scale(1.1, 1.1);
    }

    80% {
      transform: rotate3d(0, 0, 1, -5deg) scale(1.1, 1.1);
    }

    to {
      transform: rotate3d(0, 0, 1, 0deg) scale(1, 1);
    }
  }

  .greeting {
    transform-origin: top center;
    animation-name: greeting;
    animation-duration: 1s;
    animation-delay: 0.3s;
  }
`;

export const GreetingWordContainer = styled.div`
  display: flex;
  opacity: 0;
  margin-right: 25rem;

  @media screen and (max-width: 760px) {
    & {
      margin-right: 0;
    }
  }
`;

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  opacity: 0;
  margin-left: 5rem;

  @media screen and (max-width: 760px) {
    & {
      margin-left: 0;
      align-items: center;
    }
  }

  @media screen and (max-width: 450px) {
    & {
      align-items: flex-start;
    }
  }
`;

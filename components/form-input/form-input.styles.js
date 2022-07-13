import styled, { css } from "styled-components";
import { colors } from "../utils/colors/colors.styles";

const subColor = colors.tech;
const mainColor = colors.main;
const textColor = colors.subTitle;
const focusColor = colors.focus;

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${subColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: none;
  color: ${textColor};
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  letter-spacing: 1.2px;

  &:focus {
    outline: none;
    color: ${textColor};
    border-bottom: 1px solid ${subColor};
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
    color: ${subColor};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

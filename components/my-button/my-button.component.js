import { BaseButton, SmallButton } from "./my-button.styles";

const getButton = (buttonTypes) => {
  const BUTTONS = {
    base: BaseButton,
    small: SmallButton,
  };
  return BUTTONS[buttonTypes];
};

const MyButton = ({ buttonTypes, children, ...otherProps }) => {
  const CustomButton = getButton(buttonTypes);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default MyButton;

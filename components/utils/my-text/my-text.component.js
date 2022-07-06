import { CustomText } from "./my-text.styles";

const MyText = ({ size, weight, color, children }) => {
  return (
    <CustomText size={size} weight={weight} color={color}>
      {children}
    </CustomText>
  );
};

export default MyText;

import { CustomText } from "./my-text.styles";

const MyText = ({ size, weight, color, opacity, children }) => {
  return (
    <CustomText size={size} weight={weight} color={color} opacity={opacity}>
      {children}
    </CustomText>
  );
};

export default MyText;

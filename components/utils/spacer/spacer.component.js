import { SpacerContainer } from "./spacer.styles";

const Spacer = ({ position, size, children }) => {
  return (
    <SpacerContainer position={position} size={size}>
      {children}
    </SpacerContainer>
  );
};

export default Spacer;

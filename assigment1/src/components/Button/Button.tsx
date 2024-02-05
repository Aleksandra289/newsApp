import Text from "../Text/Text";
import { StyledButton } from "./StyledButton";
import { ButtonSizes } from "../../shared/theme/theme";
import { getTextSizes } from "./getTextSizes";
import { memo } from "react";

type ButtonProps = {
  children: string;
  size: ButtonSizes;
  isDisabled?: boolean;
  width?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

function ButtonComponent({
  children,
  size,
  isDisabled = false,
  onClick,
  type = "button"
}: ButtonProps) {
  const textColor = isDisabled ? "darkGray" : "white";
  const [fSize, fWeight, lHeight] = getTextSizes(size);

  return (
    <StyledButton
      size={size}
      type={type}
      $isDisabled={isDisabled}
      onClick={onClick}
    >
      <Text
        fontSize={fSize}
        fontWeight={fWeight}
        lineHeight={lHeight}
        color={textColor}
      >
        {children}
      </Text>
    </StyledButton>
  );
}
const Button = memo(ButtonComponent);
export default Button;

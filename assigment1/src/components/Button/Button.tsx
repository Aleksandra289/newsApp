import Text from "../Text/Text";
import { StyledButton } from "./StyledButton";
import { ButtonSizes, ThemeColor } from "../../shared/theme/theme";
import { getTextSizes } from "./getTextSizes";
import { memo } from "react";

type ButtonProps = {
  children: string;
  size: ButtonSizes;
  isDisabled?: boolean;
  width?: string;
  color?: ThemeColor;
  onClick?: () => void;
};

function ButtonComponent({
  children,
  size,
  isDisabled = false,
  color = "purple",
  onClick
}: ButtonProps) {
  const textColor = isDisabled ? "darkGray" : "white";
  const [fSize, fWeight, lHeight] = getTextSizes(size);

  return (
    <StyledButton
      size={size}
      $isDisabled={isDisabled}
      color={color}
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

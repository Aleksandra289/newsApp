import Text from "../Text/Text";
import { StyledButton } from "./StyledButton";
import { ButtonSizes } from "../../shared/theme/theme";
import { getTextSizes } from "./getTextSizes";
import { memo, ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  size: ButtonSizes;
  width?: string;
}

function ButtonComponent({ children, size, ...restProps }: ButtonProps) {
  const textColor = restProps.disabled ? "darkGray" : "white";
  const [fSize, fWeight, lHeight] = getTextSizes(size);

  return (
    <StyledButton size={size} {...restProps}>
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

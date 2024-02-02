import { StyledCard } from "./StyledCard";
import { BorderRadiusSizes, ThemeColor } from "../../../shared/theme/theme";
import { PaddingType } from "../../../shared/types/padding";

type CardProps = {
  children: React.ReactNode;
  borderRadius?: BorderRadiusSizes;
  backgroundColor?: ThemeColor;
  borderColor?: ThemeColor;
  padding?: PaddingType;
};

function Card({
  children,
  borderRadius = "large",
  backgroundColor = "white",
  borderColor = "whiteGray",
  padding = "0.9375rem"
}: CardProps) {
  return (
    <StyledCard
      $borderRadius={borderRadius}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      $padding={padding}
    >
      {children}
    </StyledCard>
  );
}
export default Card;

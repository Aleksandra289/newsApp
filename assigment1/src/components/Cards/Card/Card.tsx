import { StyledCard } from "./StyledCard";
import { BorderRadiusSizes, ThemeColor } from "../../../shared/theme/theme";
import { Padding } from "../../../shared/types/padding";

type CardProps = {
  children: React.ReactNode;
  borderRadius?: BorderRadiusSizes;
  backgroundColor?: ThemeColor;
  borderColor?: ThemeColor;
  padding?: Padding;
};

function Card({
  children,
  borderRadius = "large",
  backgroundColor = "white",
  borderColor = "whiteGray",
  padding = "1rem"
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

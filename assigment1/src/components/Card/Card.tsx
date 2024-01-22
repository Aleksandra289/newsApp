import { StyledCard } from "./StyledCard";
import { BorderRadiusSizes, ThemeColor } from "../../shared/theme/theme";

type CardProps={
    children: React.ReactNode;
    borderRadius?: BorderRadiusSizes;
    backgroundColor?: ThemeColor;
    borderColor?: ThemeColor;
    padding?: `${number}rem`;
}

function Card({children, borderRadius='large', backgroundColor='white', borderColor='whiteGray', padding='1rem'}: CardProps){
    return <StyledCard borderRadius={borderRadius} backgroundColor={backgroundColor} borderColor={borderColor} padding={padding}>{children}</StyledCard>
}
export default Card;
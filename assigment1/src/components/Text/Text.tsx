import { ThemeColor, TypographyFontSizes, TypographyFontWeight, TypographyLineHeight } from "../../shared/theme/theme";
import { StyledText } from "./StyledText";
export type TextProps= {
    fontSize: TypographyFontSizes,
    fontWeight: TypographyFontWeight,
    lineHeight: TypographyLineHeight,
    children: string,
    color?: ThemeColor
} 

function Text({fontSize, fontWeight, lineHeight, children, color='black'}: TextProps){
    return <StyledText $fontSize={fontSize} $fontWeight={fontWeight} $lineHeight={lineHeight} $color={color}>{children}</StyledText>
}
export default Text;
import { TypographyFontSizes, TypographyFontWeight, TypographyLineHeight } from "../../shared/theme/theme";
import { StyledText } from "./StyledText";
export type TextProps= {
    fontSize: TypographyFontSizes,
    fontWeight: TypographyFontWeight,
    lineHeight: TypographyLineHeight,
    children: string;
} 

function Text({fontSize, fontWeight, lineHeight, children}: TextProps){
    return <StyledText $fontSize={fontSize} $fontWeight={fontWeight} $lineHeight={lineHeight}>{children}</StyledText>
}
export default Text;
import styled from "styled-components"
import { TypographyFontSizes, TypographyFontWeight, TypographyLineHeight, ThemeColor } from "../../shared/theme/theme"

export const StyledText= styled.p<{$fontSize: TypographyFontSizes, $fontWeight: TypographyFontWeight, $lineHeight: TypographyLineHeight, $color: ThemeColor}>`
    font-size: ${({theme, $fontSize})=> theme.typography.fontSize[$fontSize]};
    font-weight: ${({theme, $fontWeight})=> theme.typography.fontWeight[$fontWeight]};
    line-height: ${({theme, $lineHeight})=> theme.typography.lineHeight[$lineHeight]};
    color: ${({theme, $color})=> theme.color[$color]};
`



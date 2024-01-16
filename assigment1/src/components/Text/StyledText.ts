import styled from "styled-components"
import { TypographyFontSizes, TypographyFontWeight, TypographyLineHeight } from "../../shared/theme/theme"

export const StyledText= styled.p<{fontSize: TypographyFontSizes, fontWeight: TypographyFontWeight, lineHeight: TypographyLineHeight}>`
    font-size: ${({theme, fontSize})=> theme.typography.fontSize[fontSize]};
    font-weight: ${({theme, fontWeight})=> theme.typography.fontWeight[fontWeight]};
    line-height: ${({theme, lineHeight})=> theme.typography.lineHeight[lineHeight]};
`
import styled from "styled-components"
import { TypographyHeadingType, TypographyFontWeight } from "../../shared/theme/theme"


export const StyledHeading= styled.p.attrs<{headingType: TypographyHeadingType, fontWeight: TypographyFontWeight}>(({ headingType }) => ({
    as: headingType,
}))`
    font-size: ${({theme, headingType})=> theme.typography.headingType[headingType].fontSize};
    line-height: ${({theme, headingType})=> theme.typography.headingType[headingType].lineHeight};
    font-weight: ${({theme, fontWeight})=> theme.typography.fontWeight[fontWeight]};
`

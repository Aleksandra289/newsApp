import styled from "styled-components"
import { IconSizes, ThemeColor } from "../../shared/theme/theme"

export const StyleIconWrapperDiv= styled.div<{size:IconSizes, color:ThemeColor }>`
    display: inline-block;
    height: ${({theme, size})=> theme.iconSizes[size]};
    width: ${({theme, size})=> theme.iconSizes[size]};
    color: ${({theme, color})=> theme.color[color]};
   
`
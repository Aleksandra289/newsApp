import styled from "styled-components";
import { ThemeColor } from "../../shared/theme/theme";

export const StyledCircleIconDiv= styled.div<{$backgroundColor: ThemeColor}>`
    display: inline-flex;
    width: 3rem;
    height: 3rem;
    padding: 0.75rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: ${({theme, $backgroundColor})=> theme.color[$backgroundColor]};
    border-radius: ${({theme})=> theme.borderRadius.extraLarge}
`
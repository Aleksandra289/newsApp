import styled from "styled-components";
import { css } from "styled-components";

export const StyledNavItemDiv= styled.div<{$isActive: boolean}>`
display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.5rem;
text-shadow: ${({$isActive}) => $isActive && css`0px 0px 2px ${({theme})=> theme.color.blue}`};
`
import styled from "styled-components";
import ConfirmIcon from "../../icons/ConfirmIcon";
import CancelIcon from "../../icons/CancelIcon";

export const StyledCircleIconDiv= styled.div<{icon: React.ComponentType}>`
    display: inline-flex;
    width: 3rem;
    height: 3rem;
    padding: 0.75rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: ${({ theme, icon }) => icon===ConfirmIcon ? theme.color.lighterGreen : icon===CancelIcon ? theme.color.lightPink : theme.color.lightOrange};
    border-radius: ${({theme})=> theme.borderRadius.extraLarge}
`
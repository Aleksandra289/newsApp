import styled from "styled-components";
import { getSizeStyles } from "./getSizeStyles";
import { css } from "styled-components";

export const StyledButton= styled.button<{size: string, isDisabled: boolean, color: string}>`
    display: inline-flex;
    height: 32px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: ${({theme})=> theme.borderRadius.small};
    background: ${(props)=> props.color};

    &:hover {
        background: ${({ theme }) => theme.color.violet};
    }

    ${(props) =>
        props.isDisabled &&
        css`
            background: ${({theme})=> theme.color.gray};
            cursor: not-allowed;
            &:hover {
                background: ${({ theme }) => theme.color.gray};
        }
      `     
    }

    ${(props) => getSizeStyles(props.size)}

    &:active {
        background: ${({theme})=> theme.color.darkPurple}
    }
    
`

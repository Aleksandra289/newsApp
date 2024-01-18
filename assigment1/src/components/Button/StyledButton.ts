import styled from "styled-components";
import { getSizeStyles } from "./Button";
import { css } from "styled-components";

export const StyledButton= styled.button<{size: string, isDisabled: boolean}>`
    display: inline-flex;
    height: 32px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    background: #7E44F8;

    ${(props) =>
        props.isDisabled &&
        css`
            background: #C9D2DE;
            cursor: not-allowed;
        `}

    ${(props) => getSizeStyles(props.size)}

    &:hover {
        background: #9867FF;
    }

    &:active {
        background: #733CE5
    }
    
`

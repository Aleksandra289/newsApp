import styled from "styled-components";
import { css } from "styled-components";

export const StyledButton= styled.button<{size: string, isDisabled: boolean}>`
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: ${({theme})=> theme.borderRadius.small};
    background: ${({theme})=> theme.color.purple};

    ${(props)=>
        props.size==='small' &&
        css`
           height: ${({ theme }) => theme.buttonSizes.small.height};
           padding: ${({ theme }) => theme.buttonSizes.small.padding};
           border-radius: ${({ theme }) => theme.buttonSizes.small.borderRadius};
          `
    }
    ${(props)=>
        props.size==='medium' &&
        css`
           height: ${({ theme }) => theme.buttonSizes.medium.height};
           padding: ${({ theme }) => theme.buttonSizes.medium.padding};
           border-radius: ${({ theme }) => theme.buttonSizes.medium.borderRadius};
          `
    }
    ${(props)=>
        props.size==='large' &&
        css`
           height: ${({ theme }) => theme.buttonSizes.large.height};
           padding: ${({ theme }) => theme.buttonSizes.large.padding};
           border-radius: ${({ theme }) => theme.buttonSizes.large.borderRadius};
          `
    }
    ${(props)=>
        props.size==='extraLarge' &&
        css`
           height: ${({ theme }) => theme.buttonSizes.extraLarge.height};
           padding: ${({ theme }) => theme.buttonSizes.extraLarge.padding};
           border-radius: ${({ theme }) => theme.buttonSizes.extraLarge.borderRadius};
          `
    }

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

    &:active {
        background: ${({theme})=> theme.color.darkPurple}
    }
    
`

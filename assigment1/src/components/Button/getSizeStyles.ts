import { css } from "styled-components"

export function getSizeStyles(size: string){
    switch (size){
        case 'small':
            return css`
                height: 2rem;
                padding: 0.5rem;
                border-radius: ${({theme})=> theme.borderRadius.small};
            `
        case 'medium':
            return css`
                height: 2.5rem;
                padding: 0.5rem 0.875rem;
                border-radius: ${({theme})=> theme.borderRadius.medium};
            `
        case 'large':
            return css`
                height: 3rem;
                padding: 0.5rem 1rem;
                border-radius: ${({theme})=> theme.borderRadius.medium};
            `
        case 'extra-large':
            return css`
                height: 3.5rem;
                padding: 0.5rem 1.5rem;
                border-radius: ${({theme})=> theme.borderRadius.medium};
            `
        default:
            return css`
                height: 2.5rem;
                padding: 0.5rem 0.875rem;
                border-radius: ${({theme})=> theme.borderRadius.medium};
            `

    }
}
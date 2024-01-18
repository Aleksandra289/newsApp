import Text from "../Text/Text";
import { StyledButton } from "./StyledButton";
import { css } from "styled-components";

type ButtonProps={
    children: string,
    size: 'small' | 'medium' | 'large' | 'extra-large',
    isDisabled?: boolean
}

export function getSizeStyles(size: string){
    switch (size){
        case 'small':
            return css`
                height: 2rem;
                padding: 0.5rem;
                border-radius: 0.5rem;
            `
        case 'medium':
            return css`
                height: 2.5rem;
                padding: 0.5rem 0.875rem;
                border-radius: 0.75rem;
            `
        case 'large':
            return css`
                height: 3rem;
                padding: 0.5rem 1rem;
                border-radius: 0.75rem;
            `
        case 'extra-large':
            return css`
                height: 3.5rem;
                padding: 0.5rem 1.5rem;
                border-radius: 0.75rem;
            `
        default:
            return css`
                height: 40px;
                padding: 8px 14px;
                border-radius: 12px;
            `

    }
}

//i gore izracunaj u ramovima sve
//kad povuces promene i spojis sve dodaj u temi boje i onda ih tako postavi

function Button({children, size, isDisabled=false}: ButtonProps){
    return <StyledButton size={size} isDisabled={isDisabled}>
        {size==='small' && <Text fontSize="xsmall" fontWeight="bold" lineHeight="low">{children}</Text>}
        {size==='medium' && <Text fontSize="small" fontWeight="bold" lineHeight="medium">{children}</Text>}
        {size==='large' && <Text fontSize="medium" fontWeight="bold" lineHeight="high">{children}</Text>}
        {size==='extra-large' && <Text fontSize="medium" fontWeight="bold" lineHeight="high">{children}</Text>}
    </StyledButton>
}
export default Button;
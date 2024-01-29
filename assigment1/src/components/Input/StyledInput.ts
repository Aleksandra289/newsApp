import styled, { css } from "styled-components";

export const StyledInputDiv= styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    
`
export const StyledInput= styled.input<{error: string | undefined, disabled: boolean | undefined, isFocused: boolean}>`
    display: flex;
    padding: 1rem 1.25rem;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border-radius: ${({theme})=> theme.borderRadius.medium};
    border: 1px solid #C9D2DE;
    background: #FFF;
    font-size: ${({theme})=> theme.typography.fontSize.medium};
    line-height: ${({theme})=> theme.typography.lineHeight.high};
    &::placeholder {
        font-size: ${({theme})=> theme.typography.fontSize.medium};
        font-weight: ${({theme})=> theme.typography.fontWeight.regular};
        line-height: ${({theme})=> theme.typography.lineHeight.high};
        color:  ${({theme, disabled})=> disabled? theme.color.gray : theme.color.lightBlack};
        
    }
    &:focus {
        border: ${({theme, error})=> error ? css`1px solid ${theme.color.redish}` : `1px solid ${theme.color.purple}`};
        &::placeholder{
            font-weight: ${({theme})=> theme.typography.fontWeight.semiBold};
        }
    }
    ${({error, theme})=> error && css`border: 1px solid ${theme.color.redish}`}
    ${({disabled, theme})=> disabled  && css` border: 1px solid ${theme.color.gray} ; background: ${theme.color.ashy} ; cursor: not-allowed`};
    
`
export const StyledTextDiv= styled.div`
    display: flex;
    padding: 0 0.5rem;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;   
    min-height: 1rem;
    margin-bottom: 0.25rem;
`

export const StyledErrorDiv= styled.div`
    display: flex;
    padding: 0.25rem 0.5rem 0 0.5rem;
    align-items: flex-start;
    align-self: stretch;
    min-height: 0.75rem;
`
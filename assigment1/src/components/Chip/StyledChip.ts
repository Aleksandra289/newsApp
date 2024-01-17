import styled from "styled-components"

 export const StyledDiv= styled.div`
    display: inline-flex;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: ${({theme})=> theme.borderRadius.small};
    border: 1px solid ${({theme})=> theme.colors.lightGray};
    background: ${({theme})=> theme.colors.white};
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.10);
`

export const StyledCircle= styled.div`
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.colors.red};
    border-radius: 50%;
`
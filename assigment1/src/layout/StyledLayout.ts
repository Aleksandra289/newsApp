import styled from "styled-components";

export const StyledLayoutNavDiv= styled.header` 
    margin-bottom: 1.5rem; 
    background: ${({theme})=> theme.color.white};
`
export const StyledLayoutDiv= styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 2.25rem;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media screen and (max-width: 46.5rem){
        display: flex;
        width: 100%;
        padding-bottom: 2.5rem;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;
    }
`

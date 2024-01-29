import styled from "styled-components";

export const StyledPageShellDiv= styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    width: 77.5rem;

    @media screen and (max-width: 46.5rem){
        display: flex;
        width: 44rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem
    }
`
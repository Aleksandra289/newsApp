import styled from "styled-components";

export const StyledLayoutNavDiv= styled.header` 
    margin-bottom: 1.5rem; 
    background: ${({theme})=> theme.color.white};
`
export const StyledLayoutDiv= styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 36px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`
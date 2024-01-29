import styled from "styled-components";

export const StyledLayoutDiv= styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 36px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    background: ${({theme})=> theme.color.white};
`
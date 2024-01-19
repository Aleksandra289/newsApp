import styled from "styled-components";

export const StyledCard= styled.div<{src: string}>`
    display: flex;
    position: relative;
    flex: 1 0 0;
    width: 18.75rem;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    border-radius: 1rem;
    border: 1px solid #E6E6E6;
    background: ${({theme})=> theme.color.white};
    overflow: hidden;
`
export const StyledImage= styled.img`
    width: 16.75rem;
    height: 10rem;
    flex-shrink: 0;
    border-radius: 0.5em;  
`
export const StyledTitleDiv= styled.div`
    width: 18.75rem;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

`
export const StyledDescriptionDiv= styled.div`
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  
`
export const StyledChipDiv= styled.div`
    position: absolute;
    right: 1.5625rem;
    top: 1.5625rem;
    
`


import styled from "styled-components";
import { BorderRadiusSizes, ThemeColor } from "../../shared/theme/theme";

export const StyledCard= styled.div<{borderRadius: BorderRadiusSizes, backgroundColor: ThemeColor, borderColor: ThemeColor, padding: `${number}rem`}>`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 18.75rem;
    width: 100%;
    padding: ${({padding})=> padding};
    align-items: flex-start;
    border-radius: ${({theme, borderRadius})=> theme.borderRadius[borderRadius]};
    border: 1px solid ${({theme, borderColor})=> theme.color[borderColor]};
    background: ${({theme, backgroundColor})=> theme.color[backgroundColor]};
    overflow: hidden;
    text-align: left;
`
export const StyledImage= styled.img`
    width: 100%;
    height: 10rem;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: ${({theme})=> theme.borderRadius.medium}; 
`
export const StyledTitleDiv= styled.div`
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
 
`
export const StyledDescriptionDiv= styled.div`
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



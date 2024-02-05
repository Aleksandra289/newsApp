import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        font-family: "Inter", sans-serif;
        overflow-x: hidden;
        
    }
    input{
        font-family: inherit;
    }
    button, input{
        &:focus {
    outline: none; 
     }
     border: none;
    }
    
`;

export default GlobalStyles;

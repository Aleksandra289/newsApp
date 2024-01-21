import { createGlobalStyle } from "styled-components";

const GlobalStyles= createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        font-family: "Inter", sans-serif;
        
    }
    button{
        &:focus {
    outline: none; 
     }
    }
`


export default GlobalStyles;
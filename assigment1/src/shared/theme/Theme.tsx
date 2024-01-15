import { ThemeProvider } from "styled-components";
type ThemeProps={
    children: React.ReactNode
}
const differentTheme={
    
};

function Theme({children}: ThemeProps){
    return <ThemeProvider theme={differentTheme}>{children}</ThemeProvider>
}
export default Theme;
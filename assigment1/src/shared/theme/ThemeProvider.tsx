import { ThemeProvider as Theme} from "styled-components";
import theme from "./theme";


type ThemeProviderProps={
    children: React.ReactNode
}

function ThemeProvider({children}: ThemeProviderProps){
    return <Theme theme={theme}>{children}</Theme>
}
export default ThemeProvider;
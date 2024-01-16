import { ThemeProvider as Theme} from "styled-components";
import theme from "./theme";

type ThemeProps={
    children: React.ReactNode
}

function ThemeProvider({children}: ThemeProps){
    return <Theme theme={theme}>{children}</Theme>
}
export default ThemeProvider;
import 'styled-components'
import ThemeProps from './themeProps'

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeProps{

    }
}
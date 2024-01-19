import  { ButtonSizes } from "../../shared/theme/theme";
import { TypographyFontSizes, TypographyFontWeight, TypographyLineHeight } from "../../shared/theme/theme";

export function getTextSizes (size: ButtonSizes) : [TypographyFontSizes, TypographyFontWeight, TypographyLineHeight]{
    switch (size){
        case 'small':
            return ["xsmall", "bold", "low"]
        case 'medium':
            return ["small", "bold", "medium"]
        case 'large':
            return ["medium", "bold", "high"]
        case 'extraLarge':
            return ["medium", "bold", "high"]
        default:
            return ["small", "bold", "medium"]
    }
}
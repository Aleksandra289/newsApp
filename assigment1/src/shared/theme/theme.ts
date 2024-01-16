import ThemeProps from "./themeProps";

export type TypographyFontSizes= keyof ThemeProps['typography']['fontSize'];
export type TypographyFontWeight= keyof ThemeProps['typography']['fontWeight'];
export type TypographyLineHeight= keyof ThemeProps['typography']['lineHeight'];
export type TypographyHeadingType= keyof ThemeProps['typography']['headingType'];

const theme={
    typography: {
        fontSize: {
            big: '20px',
            medium: '16px',
            small: '14px'
        },
        fontWeight: {
            big: '700',
            medium: '600',
            small: '400'
        },
        lineHeight: {
            highest: '24px',
            high: '20px',
            low: '16px'
        },
        headingType: {
            h1: {
                fontSize: '48px',
                lineHeight: '56px'
            },
            h2: {
                fontSize: '36px',
                lineHeight: '44px'
            },
            h3: {
                fontSize: '24px',
                lineHeight: '28px'
            }

        }
    }
};


export default theme;
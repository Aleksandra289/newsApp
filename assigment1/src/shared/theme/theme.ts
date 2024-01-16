import ThemeProps from "./themeProps";

export type TypographyFontSizes= keyof ThemeProps['typography']['fontSize'];
export type TypographyFontWeight= keyof ThemeProps['typography']['fontWeight'];
export type TypographyLineHeight= keyof ThemeProps['typography']['lineHeight'];
export type TypographyHeadingType= keyof ThemeProps['typography']['headingType'];

const theme: ThemeProps={
    typography: {
        fontSize: {
            bold: '1.25rem',
            semiBold: '1rem',
            regular: '0.8rem'
        },
        fontWeight: {
            big: '700',
            medium: '600',
            small: '400'
        },
        lineHeight: {
            heigh: '1.5rem',
            medium: '1.25rem',
            low: '1rem'
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
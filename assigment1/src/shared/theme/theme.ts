import ThemeProps from "./themeProps";

export type TypographyFontSizes= keyof ThemeProps['typography']['fontSize'];
export type TypographyFontWeight= keyof ThemeProps['typography']['fontWeight'];
export type TypographyLineHeight= keyof ThemeProps['typography']['lineHeight'];
export type TypographyHeadingType= keyof ThemeProps['typography']['headingType'];

const theme: ThemeProps={
    typography: {
        fontSize: {
            large: '1.25rem',
            medium: '1rem',
            small: '0.875rem'
        },
        fontWeight: {
            extraBold: '700',
            bold: '600',
            semiBold: '500',
            regular: '400'
        },
        lineHeight: {
            high: '1.5rem',
            medium: '1.25rem',
            low: '1rem'
        },
        headingType: {
            h1: {
                fontSize: '3rem',
                lineHeight: '3.5rem'
            },
            h2: {
                fontSize: '2.25rem',
                lineHeight: '2.75rem'
            },
            h3: {
                fontSize: '1.5rem',
                lineHeight: '1.75rem'
            }

        }
    },
    colors: {
        red: '#EE2636',
        white: '#FFF',
        lightGray: '#EFEFEF'
    },
    borderRadius: {
        small: '0.5rem'
    }
};


export default theme;
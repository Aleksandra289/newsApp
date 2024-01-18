import ThemeProps from "./themeProps";

export type TypographyFontSizes= keyof ThemeProps['typography']['fontSize'];
export type TypographyFontWeight= keyof ThemeProps['typography']['fontWeight'];
export type TypographyLineHeight= keyof ThemeProps['typography']['lineHeight'];
export type TypographyHeadingType= keyof ThemeProps['typography']['headingType'];
export type ThemeColor= keyof ThemeProps['color'];
export type ButtonSizes= keyof ThemeProps['buttonSizes'];

const theme: ThemeProps={
    typography: {
        fontSize: {
            large: '1.25rem',
            medium: '1rem',
            small: '0.8rem',
            xsmall: '0.75rem'
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
    color: {
        red: '#EE2636',
        white: '#FFF',
        lightGray: '#EFEFEF',
        purple: '#7E44F8',
        gray: '#C9D2DE',
        darkGray: '#7B828A',
        violet: '#9867FF',
        darkPurple: '#733CE5S',
        black: '#000'
    },
    borderRadius: {
        small: '0.5rem',
        medium: '0.75rem'
    },
   buttonSizes: {
    small: {
        height: '2rem',
        padding: '0.5rem',
        borderRadius: '0.5rem'
    },
    medium: {
        height: '2.5rem',
        padding: '0.5rem 0.875rem',
        borderRadius: '0.75rem'
    },
    large: {
        height: '3rem',
        padding: '0.5rem 1rem;',
        borderRadius: '0.75rem'
    },
    extraLarge: {
        height: '3.5rem',
        padding: '0.5rem 1.5rem',
        borderRadius: '0.75rem'
    }
   }
    
};


export default theme;
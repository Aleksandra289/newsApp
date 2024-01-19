import ThemeProps from "./themeProps";

export type TypographyFontSizes= keyof ThemeProps['typography']['fontSize'];
export type TypographyFontWeight= keyof ThemeProps['typography']['fontWeight'];
export type TypographyLineHeight= keyof ThemeProps['typography']['lineHeight'];
export type TypographyHeadingType= keyof ThemeProps['typography']['headingType'];
export type ThemeColor= keyof ThemeProps['color'];
export type ButtonSizes= keyof ThemeProps['buttonSizes'];
export type BorderRadiusSizes= keyof ThemeProps['borderRadius'];
export type IconSizes= keyof ThemeProps['iconSizes'];

const theme: ThemeProps={
    typography: {
        fontSize: {
            large: '1.25rem',
            medium: '1rem',
            small: '0.875rem',
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
        black: '#000',
        whiteGray: '#E6E6E6',
        lighterGray: '#5D5D63',
        lighterBlack: '#181E25'
        
    },
    borderRadius: {
        small: '0.5rem',
        medium: '0.75rem',
        large: '1rem'
    },
   buttonSizes: {
    small: {

        padding: '0.5rem',
        borderRadius: '0.5rem'
    },
    medium: { 
        padding: '0.5rem 0.875rem',
        borderRadius: '0.75rem'
    },
    large: { 
        padding: '0.5rem 1rem;',
        borderRadius: '0.75rem'
    },
    extraLarge: {  
        padding: '0.5rem 1.5rem',
        borderRadius: '0.75rem'
    }
   },
   iconSizes: {
    xsmall: '1rem',
    small: '1.5rem'
   }
    
};


export default theme;
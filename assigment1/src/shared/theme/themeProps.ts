
type ThemeProps= {
    typography: {
        fontSize: {
            large: string,
            medium: string,
            small: string,
            xsmall: string
        },
        fontWeight: {
            extraBold: string,
            bold: string,
            semiBold: string,
            regular: string
        },
        lineHeight: {
            high: string,
            medium: string,
            low: string
        }
        headingType: {
            h1: {
                fontSize: string;
                lineHeight: string
            },
            h2: {
                fontSize: string;
                lineHeight: string
            },
            h3: {
                fontSize: string;
                lineHeight: string
            }
        }
        

    },
    color: {
        red: string;
        white: string;
        lightGray: string;
        purple: string;
        gray: string;
        darkGray: string;
        violet: string;
        darkPurple: string;
        black: string;
        whiteGray: string,
        lighterGray: string,
        lighterBlack: string
    },
    borderRadius: {
        small: string;
        medium: string;
        large: string;
    },
    buttonSizes: {
        small: {
            padding: string,
            borderRadius: string
        },
        medium: {
            padding: string,
            borderRadius: string
        },
        large: {
            padding: string,
            borderRadius: string
        },
        extraLarge: {
            padding: string,
            borderRadius: string
        }
       },
       iconSizes: {
        xsmall: string,
        small: string
       }
} 
export default ThemeProps;
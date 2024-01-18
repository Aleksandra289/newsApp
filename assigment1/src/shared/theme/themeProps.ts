
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
    },
    borderRadius: {
        small: string;
        medium: string
    },
    buttonSizes: {
        small: {
            height: string,
            padding: string,
            borderRadius: string
        },
        medium: {
            height: string,
            padding: string,
            borderRadius: string
        },
        large: {
            height: string,
            padding: string,
            borderRadius: string
        },
        extraLarge: {
            height: string,
            padding: string,
            borderRadius: string
        }
       }
} 
export default ThemeProps;
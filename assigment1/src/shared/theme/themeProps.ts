
type ThemeProps= {
    typography: {
        fontSize: {
            large: string,
            medium: string,
            small: string
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
    colors: {
        red: string;
        white: string;
        lightGray: string
    },
    borderRadius: {
        small: string
    }
} 
export default ThemeProps;
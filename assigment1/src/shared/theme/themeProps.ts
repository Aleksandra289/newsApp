/*type HeadingType = {
    fontSize: string;
    lineHeight: string;
  };*/

type ThemeProps= {
    typography: {
        fontSize: {
            big: string,
            medium: string,
            small: string
        },
        fontWeight: {
            big: string,
            medium: string,
            small: string
        },
        lineHeight: {
            highest: string,
            high: string,
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
        

    }
} 
export default ThemeProps;
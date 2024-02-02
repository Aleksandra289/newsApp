type ThemeProps = {
  typography: {
    fontSize: {
      extraLarge: string;
      large: string;
      medium: string;
      small: string;
      xsmall: string;
    };
    fontWeight: {
      extraBold: string;
      bold: string;
      semiBold: string;
      regular: string;
    };
    lineHeight: {
      higher: string;
      high: string;
      medium: string;
      low: string;
    };
    headingType: {
      h1: {
        fontSize: string;
        lineHeight: string;
      };
      h2: {
        fontSize: string;
        lineHeight: string;
      };
      h3: {
        fontSize: string;
        lineHeight: string;
      };
    };
  };
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
    whiteGray: string;
    lighterGray: string;
    lighterBlack: string;
    silver: string;
    blue: string;
    mint: string;
    green: string;
    lighterGreen: string;
    burgundy: string;
    lightPink: string;
    orange: string;
    lightOrange: string;
    lightBlack: string;
    faded: string;
    redish: string;
    ashy: string;
    pale: string;
    turquoise: string;
    classicBlue: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
  buttonSizes: {
    small: {
      padding: string;
      borderRadius: string;
    };
    medium: {
      padding: string;
      borderRadius: string;
    };
    large: {
      padding: string;
      borderRadius: string;
    };
    extraLarge: {
      padding: string;
      borderRadius: string;
    };
  };
  iconSizes: {
    xsmall: string;
    small: string;
  };
};
export default ThemeProps;

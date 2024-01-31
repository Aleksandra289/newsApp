import styled from "styled-components";
import { ThemeColor } from "../../shared/theme/theme";

export const StyledBannerDiv = styled.div<{
  $firstGradientColor?: ThemeColor;
  $secondGradientColor?: ThemeColor;
}>`
  width: 100%;
  border-radius: 1rem;
  background: linear-gradient(
    271deg,
    ${({ $firstGradientColor, theme }) =>
        $firstGradientColor
          ? theme.color[$firstGradientColor]
          : theme.color.turquoise} -8.54%,
    ${({ $secondGradientColor, theme }) =>
        $secondGradientColor
          ? theme.color[$secondGradientColor]
          : theme.color.classicBlue}
      103.39%
  );
`;
export const StyledTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 3.4375rem;
`;
export const StyledImg = styled.img`
  height: 5.9375rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-right: 4%;
`;
export const StyledTextAndImg = styled.div`
  display: flex;
  justify-content: space-between;
`;

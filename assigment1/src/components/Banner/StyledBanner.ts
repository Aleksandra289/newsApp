import styled from "styled-components";
import { ThemeColor } from "../../shared/theme/theme";
import { breakpoints } from "../../shared/breakpoints/breakpoints";

export const StyledBannerDiv = styled.div<{
  $firstGradientColor?: ThemeColor;
  $secondGradientColor?: ThemeColor;
}>`
  width: 100%;
  border-radius: 1rem;
  padding: 1.5rem;
  padding-right: 1.5rem;
  background: linear-gradient(
    271deg,
    ${({ $firstGradientColor, theme }) => theme.color[$firstGradientColor!]} -8.54%,
    ${({ $secondGradientColor, theme }) => theme.color[$secondGradientColor!]}
      103.39%
  );

  @media ${breakpoints.tablet} {
    padding-right: 4rem;
  }
`;
export const StyledTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
`;
export const StyledImg = styled.img`
  height: 5.9375rem;
`;
export const StyledTextAndImg = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

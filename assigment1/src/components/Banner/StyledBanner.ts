import styled from "styled-components";
import { ThemeColor } from "../../shared/theme/theme";

export const StyledBannerDiv = styled.div<{
  $firstGradientColor?: ThemeColor;
  $secondGradientColor?: ThemeColor;
}>`
  width: 100%;
  border-radius: 1rem;
  padding: 1.5rem;
  padding-right: 24px;
  background: linear-gradient(
    271deg,
    ${({ $firstGradientColor, theme }) => theme.color[$firstGradientColor!]} -8.54%,
    ${({ $secondGradientColor, theme }) => theme.color[$secondGradientColor!]}
      103.39%
  );

  @media screen and (min-width: 44rem) {
    padding-right: 1.5rem;
    transition: padding-right 0.5s ease;
  }
  @media screen and (min-width: 77.5rem) {
    padding-right: 4rem;
  }
`;
export const StyledTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
export const StyledImg = styled.img`
  height: 5.9375rem;
`;
export const StyledTextAndImg = styled.div`
  display: flex;
  justify-content: space-between;
`;

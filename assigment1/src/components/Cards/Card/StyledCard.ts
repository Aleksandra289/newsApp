import styled from "styled-components";
import { BorderRadiusSizes, ThemeColor } from "../../../shared/theme/theme";

export const StyledCard = styled.div<{
  $borderRadius: BorderRadiusSizes;
  $backgroundColor: ThemeColor;
  $borderColor: ThemeColor;
  $padding: `${number}rem`;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: ${({ $padding }) => $padding};
  border-radius: ${({ theme, $borderRadius }) =>
    theme.borderRadius[$borderRadius]};
  border: 1px solid ${({ theme, $borderColor }) => theme.color[$borderColor]};
  background: ${({ theme, $backgroundColor }) => theme.color[$backgroundColor]};
  text-align: left;
`;

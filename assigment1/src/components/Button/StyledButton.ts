import styled from "styled-components";
import { css } from "styled-components";
import { ButtonSizes, ThemeColor } from "../../shared/theme/theme";

export const StyledButton = styled.button<{
  size: ButtonSizes;
  $isDisabled: boolean;
  color: ThemeColor;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme, color }) => theme.color[color]};
  width: 100%;

  ${({ size }) => css`
    padding: ${({ theme }) => theme.buttonSizes[size].padding};
    border-radius: ${({ theme }) => theme.buttonSizes[size].borderRadius};
  `}

  &:hover {
    background: ${({ theme }) => theme.color.violet};
  }
  ${(props) =>
    !props.$isDisabled &&
    css`
      &:active {
        background: ${({ theme }) => theme.color.darkPurple};
      }
    `}

  ${(props) =>
    props.$isDisabled &&
    css`
      background: ${({ theme }) => theme.color.gray};
      cursor: not-allowed;
      &:hover {
        background: ${({ theme }) => theme.color.gray};
      }
    `}
`;

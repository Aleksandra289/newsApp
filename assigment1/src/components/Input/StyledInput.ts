import { sharedInputAndTextAreaStyles } from "./../../styles/InputAndTextAreaStyles";
import styled, { css } from "styled-components";

export const StyledInputDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;
export const StyledInput = styled.input<{
  $error: string;
  disabled: boolean;
  $isFocused: boolean;
}>`
  ${sharedInputAndTextAreaStyles}
  &::placeholder {
    line-height: ${({ theme }) => theme.typography.lineHeight.high};
    color: ${({ theme, disabled }) =>
      disabled ? theme.color.gray : theme.color.lightBlack};
  }
  &:focus {
    border: ${({ theme, $error }) =>
      $error
        ? css`1px solid ${theme.color.redish}`
        : `1px solid ${theme.color.purple}`};
    &::placeholder {
      font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    }
  }
  ${({ $error, theme }) =>
    $error &&
    css`
      border: 1px solid ${theme.color.redish};
    `}
  ${({ disabled, theme }) =>
    disabled &&
    css`
      border: 1px solid ${theme.color.gray};
      background: ${theme.color.ashy};
      cursor: not-allowed;
    `};
`;

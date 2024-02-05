import { sharedInputAndTextAreaStyles } from "./../styles/InputAndTextAreaStyles";
import styled from "styled-components";
import { css } from "styled-components";

export const StyledTextAreaDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledTextArea = styled.textarea<{
  $error: string;
  $isFocused: boolean;
}>`
  ${sharedInputAndTextAreaStyles}
  width: 100%;
  height: 8rem;
  overflow: hidden;
  &::placeholder {
    line-height: ${({ theme }) => theme.typography.lineHeight.medium};
    color: ${({ theme }) => theme.color.lightBlack};
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
`;

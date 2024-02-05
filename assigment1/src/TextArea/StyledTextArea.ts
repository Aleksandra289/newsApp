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
  display: flex;
  padding: 1rem 1.25rem;
  width: 100%;
  height: 8rem;
  overflow: hidden;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => theme.color.gray};
  background: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.medium};
  &::placeholder {
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.high};
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

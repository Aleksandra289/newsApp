import { css } from "styled-components";

export const sharedInputAndTextAreaStyles = css<{ $error: string }>`
  display: flex;
  padding: 1rem 1.25rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => theme.color.gray};
  background: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.high};
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

import styled from "styled-components";
import { css } from "styled-components";
export const StyledTextWrapper = styled.div`
  min-height: 1.3rem;
`;
export const StyledTextDiv = styled.div`
  padding: 0 0.5rem;
  margin-bottom: 0.25rem;
`;

export const StyledErrorDiv = styled.div`
  padding: 0.25rem 0.5rem 0 0.5rem;
  min-height: 1.25rem;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
export const inputTextareaStyles = css<{ $error: string }>`
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
  }
  ${({ $error, theme }) =>
    $error &&
    css`
      border: 1px solid ${theme.color.redish};
    `}

  &:not(:focus):placeholder-shown + ${StyledTextWrapper} > ${StyledTextDiv} {
    display: none;
  }
  &:not(:focus):not(:placeholder-shown)
    + ${StyledTextWrapper}
    > ${StyledTextDiv} {
    ${({ $error }) =>
      !$error
        ? css`
            :first-child {
              color: ${({ theme }) => theme.color.silver};
            }
          `
        : css`
            display: none;
          `}
  }

  :disabled {
    &::placeholder {
      color: ${({ theme }) => theme.color.gray};
    }
    border: 1px solid ${({ theme }) => theme.color.gray};
    background: ${({ theme }) => theme.color.ashy};
    cursor: not-allowed;
  }
`;
export const StyledArea = styled.input<{
  $error: string;
}>`
  ${inputTextareaStyles}
`;

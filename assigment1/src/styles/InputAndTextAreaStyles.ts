import { css } from "styled-components";
import styled from "styled-components";
export const sharedInputAndTextAreaStyles = css`
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
  }
`;
export const StyledTextDiv = styled.div`
  padding: 0 0.5rem;
  min-height: 1rem;
  margin-bottom: 0.25rem;
`;

export const StyledErrorDiv = styled.div`
  padding: 0.25rem 0.5rem 0 0.5rem;
  min-height: 1.25rem;
`;

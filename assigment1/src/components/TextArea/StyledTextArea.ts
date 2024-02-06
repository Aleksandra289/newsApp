import styled from "styled-components";
import { sharedStyles } from "../../styles/SharedInputAndTextAreaStyles";

export const StyledArea = styled.textarea<{
  $error: string;
}>`
  height: 8rem;
  ${sharedStyles}
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
export const StyledWrapperDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  ${StyledTextDiv} {
    order: 1;
  }
  ${StyledArea} {
    order: 2;
  }
  ${StyledErrorDiv} {
    order: 3;
  }

  ${StyledArea}:not(:focus):placeholder-shown + ${StyledTextDiv} {
    display: none;
  }
  ${StyledArea}:not(:focus):not(:placeholder-shown) + ${StyledTextDiv} {
    :first-child {
      color: ${({ theme }) => theme.color.silver};
    }
  }
  ${StyledArea}:disabled {
    &::placeholder {
      color: ${({ theme }) => theme.color.gray};
    }
    border: 1px solid ${({ theme }) => theme.color.gray};
    background: ${({ theme }) => theme.color.ashy};
    cursor: not-allowed;
  }
`;

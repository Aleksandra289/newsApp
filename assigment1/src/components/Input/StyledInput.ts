import styled from "styled-components";
import { sharedStyles } from "../../styles/SharedInputAndTextAreaStyles";
import { css } from "styled-components";
export const StyledArea = styled.input<{
  $error: string;
}>`
  ${sharedStyles}
`;
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

export const styledWrapper = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  :not(:focus):placeholder-shown + ${StyledTextWrapper} > ${StyledTextDiv} {
    display: none;
    min-height: 1rem;
  }
  :not(:focus):not(:placeholder-shown)
    + ${StyledTextWrapper}
    > ${StyledTextDiv} {
    :first-child {
      color: ${({ theme }) => theme.color.silver};
      min-height: 1rem;
    }
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
export const StyledWrapperDiv = styled.div`
  ${styledWrapper}
  ${StyledTextDiv} {
    order: 1;
    height: 1rem;
  }
  ${StyledArea} {
    order: 2;
  }
  ${StyledErrorDiv} {
    order: 3;
  }
`;

import {
  StyledTextWrapper,
  StyledTextDiv,
  StyledErrorDiv
} from "../Input/StyledInput";
import styled from "styled-components";
import { sharedStyles } from "../../styles/SharedInputAndTextAreaStyles";

export const StyledArea = styled.textarea<{
  $error: string;
}>`
  height: 8rem;
  resize: none;
  ${sharedStyles}
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

  ${StyledArea}:not(:focus):placeholder-shown + ${StyledTextWrapper} > ${StyledTextDiv} {
    display: none;
  }
  ${StyledArea}:not(:focus):not(:placeholder-shown) + ${StyledTextWrapper} > ${StyledTextDiv} {
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

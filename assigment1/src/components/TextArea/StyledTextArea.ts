import { StyledTextDiv, StyledErrorDiv } from "../Input/StyledInput";
import styled from "styled-components";
import { sharedStyles } from "../../styles/SharedInputAndTextAreaStyles";
import { styledWrapper } from "../Input/StyledInput";

export const StyledArea = styled.textarea<{
  $error: string;
}>`
  height: 8rem;
  resize: none;
  ${sharedStyles}
`;

export const StyledWrapperDiv = styled.div`
  ${styledWrapper}
  ${StyledTextDiv} {
    order: 1;
  }
  ${StyledArea} {
    order: 2;
  }
  ${StyledErrorDiv} {
    order: 3;
  }
`;

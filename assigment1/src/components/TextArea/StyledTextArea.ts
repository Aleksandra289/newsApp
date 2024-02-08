import styled from "styled-components";
import { sharedInputAndTextAreaStyles } from "../../shared/styles/SharedInputAndTextAreaStyles";
import { inputTextareaStyles } from "../Input/StyledInput";
import { HeightType } from "./TextArea";

export const StyledArea = styled.textarea<{
  $error: string;
  height: HeightType;
}>`
  height: ${(props) => props.height};
  resize: none;
  ${sharedInputAndTextAreaStyles}
`;

export const StyledWrapperDiv = styled.div`
  ${inputTextareaStyles}
`;

import styled from "styled-components";
import { inputTextareaStyles } from "../Input/StyledInput";
import { Height } from "./TextArea";

export const StyledArea = styled.textarea<{
  $error: string;
  height: Height;
}>`
  height: ${(props) => props.height};
  resize: none;
  ${inputTextareaStyles}
`;

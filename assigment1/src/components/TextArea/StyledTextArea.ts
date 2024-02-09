import styled from "styled-components";
import { inputTextareaStyles } from "../Input/StyledInput";
import { Height } from "../../shared/types/height";

export const StyledArea = styled.textarea<{
  $error: string;
  $height: Height;
}>`
  height: ${({ $height }) => $height};
  resize: none;
  ${inputTextareaStyles}
`;

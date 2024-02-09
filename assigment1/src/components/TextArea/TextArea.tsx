import { StyledArea } from "./StyledTextArea";
import {
  StyledTextWrapper,
  StyledTextDiv,
  StyledErrorDiv,
  Wrapper
} from "../Input/StyledInput";
import Text from "../Text/Text";
import { TextareaHTMLAttributes, forwardRef, Ref } from "react";
import { Height } from "../../shared/types/height";
type TextAreaProps = {
  label: string;
  error?: string;
  height?: Height;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef(
  (
    { label, error = "", height = "8rem", ...restProps }: TextAreaProps,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    return (
      <Wrapper>
        <StyledErrorDiv>
          {error && (
            <Text
              fontSize="xsmall"
              fontWeight="regular"
              lineHeight="low"
              color="redish"
            >
              {error}
            </Text>
          )}
        </StyledErrorDiv>
        <StyledArea
          placeholder="Description"
          $error={error}
          ref={ref}
          $height={height}
          {...restProps}
        />
        <StyledTextWrapper>
          <StyledTextDiv>
            <Text
              fontSize="xsmall"
              fontWeight="regular"
              lineHeight="low"
              color={error ? "redish" : "purple"}
            >
              {label}
            </Text>
          </StyledTextDiv>
        </StyledTextWrapper>
      </Wrapper>
    );
  }
);
export default TextArea;

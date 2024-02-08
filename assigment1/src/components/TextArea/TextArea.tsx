import { StyledArea } from "./StyledTextArea";
import {
  StyledTextWrapper,
  StyledTextDiv,
  StyledErrorDiv,
  Wrapper
} from "../Input/StyledInput";
import Text from "../Text/Text";
import { TextareaHTMLAttributes, forwardRef, LegacyRef } from "react";
export type Height = `${number}rem`;
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  height?: Height;
}

const TextArea = forwardRef(
  (
    { label, error = "", height = "8rem", ...restProps }: TextAreaProps,
    ref: LegacyRef<HTMLTextAreaElement>
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
          height={height}
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

import { StyledTextArea, StyledTextAreaDiv } from "./StyledTextArea";
import Text from "../components/Text/Text";
import { useState, TextareaHTMLAttributes, forwardRef, LegacyRef } from "react";
import {
  StyledErrorDiv,
  StyledTextDiv
} from "../styles/InputAndTextAreaStyles";
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const TextArea = forwardRef(
  (
    { label, error = "", ...restProps }: TextAreaProps,
    ref: LegacyRef<HTMLTextAreaElement>
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    function onFocusHandler() {
      setIsFocused(true);
    }

    function onBlurHandler() {
      setIsFocused(false);
    }

    return (
      <>
        <StyledTextAreaDiv>
          <StyledTextDiv>
            {isFocused && (
              <Text
                fontSize="xsmall"
                fontWeight="regular"
                lineHeight="low"
                color={error ? "redish" : "purple"}
              >
                {label}
              </Text>
            )}
          </StyledTextDiv>
          <StyledTextArea
            placeholder="Description"
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            $error={error}
            $isFocused={isFocused}
            ref={ref}
            {...restProps}
          />

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
        </StyledTextAreaDiv>
      </>
    );
  }
);
export default TextArea;

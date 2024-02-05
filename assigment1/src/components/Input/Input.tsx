import { StyledInputDiv, StyledInput } from "./StyledInput";
import {
  StyledTextDiv,
  StyledErrorDiv
} from "../../styles/InputAndTextAreaStyles";
import Text from "../Text/Text";
import { useState, InputHTMLAttributes, forwardRef, Ref } from "react";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  value?: string;
  disabled?: boolean;
}

const Input = forwardRef(
  (
    { label, error = "", value, disabled = false, ...restProps }: InputType,
    ref: Ref<HTMLInputElement>
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    function onFocusHandler() {
      setIsFocused(true);
    }

    function onBlurHandler() {
      setIsFocused(false);
    }

    return (
      <StyledInputDiv>
        <StyledTextDiv>
          {isFocused && !disabled && (
            <Text
              fontSize="xsmall"
              fontWeight="regular"
              lineHeight="low"
              color={error ? "redish" : "purple"}
            >
              {label}
            </Text>
          )}
          {!isFocused && value && !error && !disabled && (
            <Text
              fontSize="xsmall"
              fontWeight="regular"
              lineHeight="low"
              color="silver"
            >
              {label}
            </Text>
          )}
        </StyledTextDiv>
        <StyledInput
          type="text"
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          $error={error}
          disabled={disabled}
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
      </StyledInputDiv>
    );
  }
);
export default Input;

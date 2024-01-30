import {
  StyledInputDiv,
  StyledInput,
  StyledTextDiv,
  StyledErrorDiv
} from "./StyledInput";
import Text from "../Text/Text";
import { useState, InputHTMLAttributes } from "react";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  value: string;
  disabled?: boolean;
}

function Input({
  label,
  error = "",
  value,
  disabled = false,
  ...restProps
}: InputType) {
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
export default Input;

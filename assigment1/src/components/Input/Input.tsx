import {
  StyledArea,
  StyledWrapperDiv,
  StyledTextDiv,
  StyledErrorDiv
} from "../Input/StyledInput";
import Text from "../Text/Text";
import { InputHTMLAttributes, forwardRef, Ref } from "react";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  value?: string;
  disabled?: boolean;
}

const Input = forwardRef(
  (
    { label, error = "", disabled = false, ...restProps }: InputType,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <StyledWrapperDiv>
        <StyledArea
          type="text"
          $error={error}
          disabled={disabled}
          ref={ref}
          {...restProps}
        />
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
      </StyledWrapperDiv>
    );
  }
);
export default Input;

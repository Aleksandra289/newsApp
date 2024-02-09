import {
  StyledArea,
  StyledTextDiv,
  StyledErrorDiv,
  StyledTextWrapper,
  Wrapper
} from "./StyledInput";
import Text from "../Text/Text";
import { InputHTMLAttributes, forwardRef, Ref } from "react";

type InputProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(
  (
    { label, error = "", disabled = false, ...restProps }: InputProps,
    ref: Ref<HTMLInputElement>
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
          type="text"
          $error={error}
          disabled={disabled}
          ref={ref}
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
export default Input;

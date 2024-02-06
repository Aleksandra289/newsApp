import {
  StyledWrapperDiv,
  StyledTextDiv,
  StyledErrorDiv
} from "../TextArea/StyledTextArea";
import { StyledArea } from "./StyledTextArea";
import Text from "../Text/Text";
import { TextareaHTMLAttributes, forwardRef, LegacyRef } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const TextArea = forwardRef(
  (
    { label, error = "", ...restProps }: TextAreaProps,
    ref: LegacyRef<HTMLTextAreaElement>
  ) => {
    return (
      <>
        <StyledWrapperDiv>
          <StyledArea
            placeholder="Description"
            $error={error}
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
      </>
    );
  }
);
export default TextArea;

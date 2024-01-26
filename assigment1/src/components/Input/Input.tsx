import { StyledInputDiv, StyledInput, StyledtextDiv, StyledErrorDiv } from "./StyledInput";
import Text from "../Text/Text";
import { useState, InputHTMLAttributes } from "react";


interface InputType extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

function Input({label, placeholder, value, error, disabled, onChange}: InputType){

    const [isFocused, setIsFocused]= useState(false);
  

    function onFocusHandler(){
        setIsFocused(true);
    }

    function onBlurHandler(){
        setIsFocused(false);
    }
 
    return <StyledInputDiv>
        {!disabled && 
        <StyledtextDiv>
            {isFocused &&<Text fontSize="xsmall" fontWeight="regular" lineHeight="low" color={error? 'redish': "purple"}>{label}</Text>}
            {!isFocused && value && !error && <Text fontSize="xsmall" fontWeight="regular" lineHeight="low" color='silver'>{label}</Text>}                     
        </StyledtextDiv> }
        <StyledInput type="text" placeholder={placeholder} onFocus={onFocusHandler} onBlur={onBlurHandler} onChange={onChange} error={error} disabled={disabled}></StyledInput>
        <StyledErrorDiv>
        {error && <Text fontSize="xsmall" fontWeight="regular" lineHeight="low" color='redish'>{error}</Text>}
        </StyledErrorDiv>
    </StyledInputDiv>
    
}
export default Input;
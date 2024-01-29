import { StyledInputDiv, StyledInput, StyledTextDiv, StyledErrorDiv } from "./StyledInput";
import Text from "../Text/Text";
import { useState, InputHTMLAttributes } from "react";


interface InputType extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

function Input({label, placeholder, value, error, disabled, onChange, ...rest}: InputType){

    const [isFocused, setIsFocused]= useState(false);
  

    function onFocusHandler(){
        setIsFocused(true);
    }

    function onBlurHandler(){
        setIsFocused(false);
    }
 
    return <StyledInputDiv>
      
        <StyledTextDiv>
            {isFocused && !disabled && <Text fontSize="xsmall" fontWeight="regular" lineHeight="low" color={error? 'redish': "purple"}>{label}</Text>}
            {!isFocused && value && !error && !disabled && <Text fontSize="xsmall" fontWeight="regular" lineHeight="low" color='silver'>{label}</Text>}                     
        </StyledTextDiv> 
        <StyledInput type="text" placeholder={placeholder} onFocus={onFocusHandler} onBlur={onBlurHandler} onChange={onChange} $error={error} disabled={disabled} value={value} $isFocused={isFocused} {...rest}/>
   
        <StyledErrorDiv>
            {error && <Text fontSize="xsmall" fontWeight="regular" lineHeight="low" color='redish'>{error}</Text>}
        </StyledErrorDiv>
    </StyledInputDiv>
    
}
export default Input;
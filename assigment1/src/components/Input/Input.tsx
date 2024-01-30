import { StyledInputDiv, StyledInput, StyledTextDiv, StyledErrorDiv } from "./StyledInput";
import Text from "../Text/Text";
import { useState, InputHTMLAttributes } from "react";


interface InputType extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

function Input({label, error, ...restProps}: InputType){

    const [isFocused, setIsFocused]= useState(false);
  

    function onFocusHandler(){
        setIsFocused(true);
    }

    function onBlurHandler(){
        setIsFocused(false);
    }
 
    return <StyledInputDiv>
      
        <StyledTextDiv>
            {isFocused && !restProps.disabled && <Text fontSize="xsmall" fontWeight="regular" lineHeight="low" color={error? 'redish': "purple"}>{label}</Text>}
            {!isFocused && restProps.value && !error && !restProps.disabled && <Text fontSize="xsmall" fontWeight="regular" lineHeight="low" color='silver'>{label}</Text>}                     
        </StyledTextDiv> 
        <StyledInput type="text" onFocus={onFocusHandler} onBlur={onBlurHandler} $error={error} disabled={restProps.disabled} $isFocused={isFocused} {...restProps}/>
   
        <StyledErrorDiv>
            {error && <Text fontSize="xsmall" fontWeight="regular" lineHeight="low" color='redish'>{error}</Text>}
        </StyledErrorDiv>
    </StyledInputDiv>
    
}
export default Input;
import { StyledInputDiv, StyledInput, StyledtextDiv, StyledErrorDiv } from "./StyledInput";
import Text from "../Text/Text";
import { useState, ChangeEvent } from "react";


type InputType={
    label: string,
    placeholder: string,
    userInput: string
    error?: string,
    isDisabled?: boolean
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>)=>void
}

function Input({label, placeholder, userInput, error, isDisabled, onChangeHandler}: InputType){

    const [isFocused, setIsFocused]= useState(false);
  

    function onFocusHandler(){
        setIsFocused(true);
    }

    function onBlurHandler(){
        setIsFocused(false);
    }
 
    return <StyledInputDiv>
        {!isDisabled && 
        <StyledtextDiv>
            {isFocused &&<Text fontSize="xsmall" fontWeight="regular" lineHeight="low" color={error? 'redish': "purple"}>{label}</Text>}
            {!isFocused && userInput && !error && <Text fontSize="xsmall" fontWeight="regular" lineHeight="low" color='silver'>{label}</Text>}                     
        </StyledtextDiv> }
        <StyledInput type="text" placeholder={placeholder} onFocus={onFocusHandler} onBlur={onBlurHandler} onChange={onChangeHandler} error={error} disabled={isDisabled}></StyledInput>
        <StyledErrorDiv>
        {error && <Text fontSize="xsmall" fontWeight="regular" lineHeight="low" color='redish'>{error}</Text>}
        </StyledErrorDiv>
    </StyledInputDiv>
    
}
export default Input;
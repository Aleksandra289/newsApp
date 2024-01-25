import Text from "../Text/Text";
import { StyledButton } from "./StyledButton";
import { ButtonSizes } from "../../shared/theme/theme";
import { getTextSizes } from "./getTextSizes";


type ButtonProps={
    children: string,
    size: ButtonSizes,
    isDisabled?: boolean,
}


function Button({children, size, isDisabled=false}: ButtonProps){
    const textColor= isDisabled? 'darkGray' : 'white';
    const [fSize, fWeight, lHeight]= getTextSizes(size);

    return <StyledButton size={size} $isDisabled={isDisabled}>
        <Text fontSize={fSize} fontWeight={fWeight} lineHeight={lHeight} color={textColor}>{children}</Text>
    </StyledButton>
}
export default Button;
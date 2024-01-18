import Text from "../Text/Text";
import { StyledButton } from "./StyledButton";
import { ButtonSizes } from "../../shared/theme/theme";


type ButtonProps={
    children: string,
    size: ButtonSizes,
    isDisabled?: boolean,
}


function Button({children, size, isDisabled=false}: ButtonProps){
    const textColor= isDisabled? 'darkGray' : 'white';

    return <StyledButton size={size} isDisabled={isDisabled}>
        {size==='small' && <Text fontSize="xsmall" fontWeight="bold" lineHeight="low" color={textColor}>{children}</Text>}
        {size==='medium' && <Text fontSize="small" fontWeight="bold" lineHeight="medium" color={textColor}>{children}</Text>}
        {size==='large' && <Text fontSize="medium" fontWeight="bold" lineHeight="high" color={textColor}>{children}</Text>}
        {size==='extraLarge' && <Text fontSize="medium" fontWeight="bold" lineHeight="high" color={textColor}>{children}</Text>}
    </StyledButton>
}
export default Button;
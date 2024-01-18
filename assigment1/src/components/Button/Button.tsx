import Text from "../Text/Text";
import { StyledButton } from "./StyledButton";


type ButtonProps={
    children: string,
    size: 'small' | 'medium' | 'large' | 'extra-large',
    isDisabled?: boolean,
    color?: string
}


function Button({children, size, isDisabled=false, color='#7E44F8'}: ButtonProps){
    const textColor= isDisabled? 'darkGray' : 'white';

    return <StyledButton size={size} isDisabled={isDisabled} color={color}>
        {size==='small' && <Text fontSize="xsmall" fontWeight="bold" lineHeight="low" color={textColor}>{children}</Text>}
        {size==='medium' && <Text fontSize="small" fontWeight="bold" lineHeight="medium" color={textColor}>{children}</Text>}
        {size==='large' && <Text fontSize="medium" fontWeight="bold" lineHeight="high" color={textColor}>{children}</Text>}
        {size==='extra-large' && <Text fontSize="medium" fontWeight="bold" lineHeight="high" color={textColor}>{children}</Text>}
    </StyledButton>
}
export default Button;
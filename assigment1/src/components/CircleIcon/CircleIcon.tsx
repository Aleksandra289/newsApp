import { StyledCircleIconDiv } from "./StyledCircleIcon";
import IconWrapper from "../IconWrapper/IconWrapper";
import ConfirmIcon from "../../icons/ConfirmIcon";
import CancelIcon from "../../icons/CancelIcon";


type CircleIconProps={
    icon: React.ComponentType;
}

function CircleIcon({icon}: CircleIconProps){
    const color= icon===ConfirmIcon ? 'green' : icon===CancelIcon ? 'burgundy' : 'orange'
    return <StyledCircleIconDiv icon={icon}>
         <IconWrapper icon={icon} size='small' color={color}></IconWrapper>
    </StyledCircleIconDiv>
}
export default CircleIcon;
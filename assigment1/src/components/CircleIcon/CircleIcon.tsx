import { StyledCircleIconDiv } from "./StyledCircleIcon";
import IconWrapper from "../IconWrapper/IconWrapper";
import { getStatusIconColor } from "./getStatusIconColor";



type CircleIconProps={
    status: React.ComponentType;
}

function CircleIcon({status}: CircleIconProps){
    const [iconColor, backgroundColor]= getStatusIconColor(status)
    return <StyledCircleIconDiv icon={status} backgroundColor={backgroundColor}>
         <IconWrapper icon={status} size='small' color={iconColor}></IconWrapper>
    </StyledCircleIconDiv>
}
export default CircleIcon;
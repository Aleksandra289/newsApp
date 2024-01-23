import { StyledCircleIconDiv } from "./StyledCircleIcon";
import IconWrapper from "../IconWrapper/IconWrapper";
import { getStatusIconColor } from "./getStatusIconColor";

export type StatusProps= "success" | "error" | "warning"
export type CircleIconProps={
    status: StatusProps
}

function CircleIcon({status}: CircleIconProps){
    const [icon, iconColor, backgroundColor]= getStatusIconColor(status)
    return <StyledCircleIconDiv $backgroundColor={backgroundColor}>
         <IconWrapper icon={icon} size='small' color={iconColor}></IconWrapper>
    </StyledCircleIconDiv>
}
export default CircleIcon;
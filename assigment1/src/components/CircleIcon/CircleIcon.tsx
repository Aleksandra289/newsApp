import { StyledCircleIconDiv } from "./StyledCircleIcon";
import IconWrapper from "../IconWrapper/IconWrapper";
import { getStatusIconColor } from "./getStatusIconColor";
import { StatusType } from "../../shared/types/status";

type CircleIconProps={
    status: StatusType
}

function CircleIcon({status}: CircleIconProps){
    const [icon, iconColor, backgroundColor]= getStatusIconColor(status)
    return <StyledCircleIconDiv $backgroundColor={backgroundColor}>
         <IconWrapper icon={icon} size='small' color={iconColor}></IconWrapper>
    </StyledCircleIconDiv>
}
export default CircleIcon;
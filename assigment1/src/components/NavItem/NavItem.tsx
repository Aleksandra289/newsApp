import IconWrapper from "../IconWrapper/IconWrapper";
import Text from "../Text/Text";
import { StyledNavItemDiv } from "./StyledNavItem";

type NavItemProps={
    icon: React.ComponentType,
    title: string;
    isActive?: boolean
}

function NavItem({icon, title, isActive=false}: NavItemProps){
    const textColor= isActive? 'blue': 'silver' 
    const textWeight= isActive? 'extraBold': 'regular' 
    const iconColor= isActive? 'blue': 'silver' 

    return <StyledNavItemDiv isActive={isActive}>
        <IconWrapper icon={icon} size='small' color={iconColor}></IconWrapper>
        <Text fontSize="medium" fontWeight={textWeight} lineHeight="high" color={textColor}>{title}</Text> 
    </StyledNavItemDiv>
}
export default NavItem;
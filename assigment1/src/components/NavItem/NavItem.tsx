import IconWrapper from "../IconWrapper/IconWrapper";
import Text from "../Text/Text";
import { StyledNavItemDiv } from "./StyledNavItem";

type NavItemProps={
    icon: React.ComponentType,
    title: string;
    value: number;
    selectedItem: number;
    isActive?: boolean;
    onClick: (value: number)=>void
}

function NavItem({icon, title, value, selectedItem, onClick}: NavItemProps){
    const isActive = selectedItem === value;
    const textColor= isActive? 'blue': 'silver' 
    const textWeight= isActive? 'extraBold': 'regular' 
    const iconColor= isActive? 'blue': 'silver' 

    return <StyledNavItemDiv isActive={isActive} onClick={()=> {onClick(value)}}>
        <IconWrapper icon={icon} size='small' color={iconColor}></IconWrapper>
        <Text fontSize="medium" fontWeight={textWeight} lineHeight="high" color={textColor}>{title}</Text> 
    </StyledNavItemDiv>
}
export default NavItem;
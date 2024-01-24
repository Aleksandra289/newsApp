import IconWrapper from "../IconWrapper/IconWrapper";
import Text from "../Text/Text";
import { StyledNavItemDiv } from "./StyledNavItem";

type NavItemProps={
    icon: React.ComponentType,
    title: string;
    isActive?: boolean;
    selected: string;
    value: string;
    onChangeActiveNavItem: (selectedItem: string)=>void
}

function NavItem({icon, title, selected, value, onChangeActiveNavItem}: NavItemProps){
   const isActive= value===selected;
    const textColor= isActive? 'blue': 'silver' 
    const textWeight= isActive? 'extraBold': 'regular' 
    const iconColor= isActive? 'blue': 'silver' 

    return <StyledNavItemDiv isActive={isActive} onClick={()=> onChangeActiveNavItem(value)}>
        <IconWrapper icon={icon} size='small' color={iconColor}></IconWrapper>
        <Text fontSize="medium" fontWeight={textWeight} lineHeight="high" color={textColor}>{title}</Text> 
    </StyledNavItemDiv>
}
export default NavItem;
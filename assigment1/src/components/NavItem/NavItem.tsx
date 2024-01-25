import IconWrapper from "../IconWrapper/IconWrapper";
import Text from "../Text/Text";
import { StyledNavItemDiv } from "./StyledNavItem";
import { ItemProps } from "../../shared/types/arrayItem";

type NavItemProps={
    icon: React.ComponentType,
    title: string;
    isActive?: boolean;
    item: ItemProps;
    onChangeActiveNavItem: (selectedItem: ItemProps)=>void
}

function NavItem({icon, title, isActive=false, item, onChangeActiveNavItem}: NavItemProps){
    const textColor= isActive? 'blue': 'silver' 
    const textWeight= isActive? 'extraBold': 'regular' 
    const iconColor= isActive? 'blue': 'silver' 

    return <StyledNavItemDiv $isActive={isActive} onClick={()=> onChangeActiveNavItem(item)}>
        <IconWrapper icon={icon} size='small' color={iconColor}></IconWrapper>
        <Text fontSize="medium" fontWeight={textWeight} lineHeight="high" color={textColor}>{title}</Text> 
    </StyledNavItemDiv>
}
export default NavItem;
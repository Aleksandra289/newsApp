import IconWrapper from "../IconWrapper/IconWrapper";
import Text from "../Text/Text";
import { StyledNavItemDiv, StyledTextWrapper } from "./StyledNavItem";
import { ItemProps } from "../../shared/types/navItem";

type NavItemProps={
    icon: React.ComponentType,
    title: string;
    isActive?: boolean;
    item: ItemProps;
    onChangeActiveNavItem: (selectedItem: ItemProps)=>void
}

function NavItem({icon, title, isActive=false, item, onChangeActiveNavItem}: NavItemProps){
    const textColor= isActive? 'blue': 'silver' 
    const iconColor= isActive? 'blue': 'silver' 
    const textWeight= isActive? 'extraBold': 'regular'

    return <StyledNavItemDiv $isActive={isActive} onClick={()=> onChangeActiveNavItem(item)}> 
            <IconWrapper icon={icon} size='small' color={iconColor}></IconWrapper>
            <StyledTextWrapper>
                <Text fontSize="medium" fontWeight={textWeight} lineHeight="high" color={textColor}>{title}</Text> 
            </StyledTextWrapper>
    </StyledNavItemDiv>
}
export default NavItem;
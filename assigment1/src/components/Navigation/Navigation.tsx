import NavItem from "../NavItem/NavItem";
import { StyledNavDiv } from "./StyledNavigation";
import { ItemProps } from "../../shared/types/navItem";
import { useMemo } from "react";

type NavigationProps={
    selectedItem: ItemProps,
    items: ItemProps[],
    onChangeActiveNavItem: (selectedItem: ItemProps)=>void
}

function Navigation({selectedItem, items, onChangeActiveNavItem}: NavigationProps){

     const navItems= useMemo(()=>{
        return items.map((item)=>{
            return <NavItem key={item.value} icon={item.icon} title={item.label} isActive={selectedItem===item} item={item} onChangeActiveNavItem={onChangeActiveNavItem}/>
        })
    }, [items, selectedItem, onChangeActiveNavItem]) 
    
    return <StyledNavDiv>
        {navItems}
    </StyledNavDiv>
}
export default Navigation;
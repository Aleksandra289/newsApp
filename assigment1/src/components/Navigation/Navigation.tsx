import NavItem from "../NavItem/NavItem";
import { StyledNavDiv } from "./StyledNavigation";

type ItemProps={
    label: string;
    icon: React.ComponentType;
    value: string
    url: string
}

type NavigationProps={
    selected: string,
    items: ItemProps[],
    onChangeActiveNavItem: (selectedItem: string)=>void
}

function Navigation({selected, items, onChangeActiveNavItem}: NavigationProps){


    const mappedArray= items.map((item)=>{
        return <NavItem key={item.value} icon={item.icon} title={item.label} selected={selected} value={item.value} onChangeActiveNavItem={onChangeActiveNavItem}/>
    })
    
    return <StyledNavDiv>
        {mappedArray}
    </StyledNavDiv>
}
export default Navigation;
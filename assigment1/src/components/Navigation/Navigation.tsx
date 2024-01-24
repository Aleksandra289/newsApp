import HomeIcon from "../../icons/HomeIcon";
import NewPostIcon from "../../icons/NewPostIcon";
import AllNewsIcon from "../../icons/AllNewsIcon";
import NavItem from "../NavItem/NavItem";
import { StyledNavDiv } from "./StyledNavigation";

const items=
[{
    label: "Home",
    icon: HomeIcon,
    value: 1,
    url: ""
}, 
{
    label: "New post",
    icon: NewPostIcon,
    value: 2,
    url: ""
},
{
    label: "All news",
    icon: AllNewsIcon,
    value: 3,
    url: ""
}]

type NavigationProps={
    selectedItem: number
}

function Navigation({selectedItem}: NavigationProps){

    function onClickNavItemHandler(value: number){
        console.log('clicked on item with value ' + value)
    }

    const mappedArray= items.map((item)=>{
        return <NavItem key={item.value} icon={item.icon} title={item.label} value={item.value} selectedItem={selectedItem} onClick={onClickNavItemHandler}/>
    })
    
    return <StyledNavDiv>
        {mappedArray}
    </StyledNavDiv>
}
export default Navigation;
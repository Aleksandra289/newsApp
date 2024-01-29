import HomeIcon from "../../../icons/HomeIcon"
import NewPostIcon from "../../../icons/NewPostIcon"
import AllNewsIcon from "../../../icons/AllNewsIcon"
import { routes } from "../../../Router/routes"

export const items=
[{
    label: "Home",
    icon: HomeIcon,
    value: '1',
    url: routes.home
}, 
{
    label: "New post",
    icon: NewPostIcon,
    value: '2',
    url: routes.newPost
},
{
    label: "All news",
    icon: AllNewsIcon,
    value: '3',
    url: routes.allNews
}]
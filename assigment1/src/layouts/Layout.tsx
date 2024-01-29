import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ItemProps } from "../shared/types/navItem";
import { items } from "../shared/data/navigation/items";
import Navigation from "../components/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";

export default function RootLayout() {
    const [activeItem, setActiveItem]= useState<ItemProps>(items[0]);
    const navigate= useNavigate();

    function onChangeActiveNavItem(selectedItem: ItemProps){
      setActiveItem(selectedItem);     
      navigate(selectedItem.url);
    }
  return (  
    <PageShell>
        <header>
            <Navigation selectedItem={activeItem} items={items} onChangeActiveNavItem={onChangeActiveNavItem}/>
        </header>
        <main>
            <Outlet/>
        </main>
    </PageShell>
  )
}

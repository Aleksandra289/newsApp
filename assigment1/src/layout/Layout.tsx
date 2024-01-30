import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ItemProps } from "../shared/types/navItem";
import { items } from "../shared/data/navigation/items";
import Navigation from "../components/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";
import { StyledLayoutDiv } from "./StyledLayout";
import { StyledPageShellWrapperDiv } from "../components/PageShell/StyledPageShell";

export default function Layout() {
  const [activeItem, setActiveItem] = useState<ItemProps>(items[0]);
  const navigate = useNavigate();

  function onChangeActiveNavItem(selectedItem: ItemProps) {
    setActiveItem(selectedItem);
    navigate(selectedItem.url);
  }
  return (
    <StyledLayoutDiv>
      <Navigation
        selectedItem={activeItem}
        items={items}
        onChangeActiveNavItem={onChangeActiveNavItem}
      />
      <StyledPageShellWrapperDiv>
        <PageShell>
          <Outlet />
        </PageShell>
      </StyledPageShellWrapperDiv>
    </StyledLayoutDiv>
  );
}

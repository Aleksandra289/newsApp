import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemProps } from "../shared/types/navItem";
import { items } from "../shared/data/navigation/items";
import Navigation from "../components/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";
import { StyledLayoutDiv } from "./StyledLayout";
import { StyledPageShellWrapperDiv } from "../components/PageShell/StyledPageShell";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const [activeItem, setActiveItem] = useState<ItemProps>(items[0]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const selectedItem = items.find((item) => item.url === location.pathname);
    if (selectedItem) {
      setActiveItem(selectedItem);
    }
  }, [location.pathname]);

  function onChangeActiveNavItem(selectedItem: ItemProps) {
    setActiveItem(selectedItem);
    navigate(selectedItem.url);
  }
  return (
    <StyledLayout>
      <Navigation
        selectedItem={activeItem}
        items={items}
        onChangeActiveNavItem={onChangeActiveNavItem}
      />
      <StyledPageShellWrapper>
        <PageShell>
          <Outlet />
        </PageShell>
      </StyledPageShellWrapper>
    </StyledLayout>
  );
}

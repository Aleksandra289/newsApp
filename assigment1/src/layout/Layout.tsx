import { Outlet } from "react-router-dom";
import { ItemProps } from "../shared/types/navItem";
import { items } from "../shared/data/navigation/items";
import Navigation from "../components/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";
import { StyledLayout } from "./StyledLayout";
import { StyledPageShellWrapper } from "../components/PageShell/StyledPageShell";
import { useSetActiveNavigationRoute } from "../hooks/useActiveNavigationRoute/useSetActiveNavigationRoute";
import { useRouteValidationCheck } from "../hooks/useRouteValidation/useRouteValidationCheck";

export default function Layout() {
  const { activeItem, setActiveItem } = useSetActiveNavigationRoute();
  const navigate = useNavigate();

  useRouteValidationCheck();

  function onChangeActiveNavItem(selectedItem: ItemProps) {
    setActiveItem(selectedItem);
    navigate(selectedItem.url);
  }

  const knownRoute =
    pathname === routes.root ||
    pathname === routes.allNews ||
    pathname === routes.newPost;

  return (
    <StyledLayout>
      {knownRoute && (
        <Navigation
          selectedItem={activeItem}
          items={items}
          onChangeActiveNavItem={onChangeActiveNavItem}
        />
      )}
      <StyledPageShellWrapper>
        <PageShell>
          <Outlet />
        </PageShell>
      </StyledPageShellWrapper>
    </StyledLayout>
  );
}

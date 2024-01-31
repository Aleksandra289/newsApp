import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ItemProps } from "../shared/types/navItem";
import { items } from "../shared/data/navigation/items";

export function useActiveNavItem() {
  const [activeItem, setActiveItem] = useState<ItemProps>(items[0]);
  const { pathname } = useLocation();
  useEffect(() => {
    const selectedItem = items.find((item) => item.url === pathname);
    if (selectedItem) {
      setActiveItem(selectedItem);
    }
  }, [pathname]);

  return { activeItem, setActiveItem };
}

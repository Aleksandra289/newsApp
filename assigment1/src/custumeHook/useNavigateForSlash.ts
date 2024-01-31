import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function useNavigateForSlash() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== "/" && pathname.endsWith("/")) {
      const newPathname = pathname.replace(/\/+$/, "");
      navigate(newPathname);
    }
  }, [pathname, navigate]);
}

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useRouteValidationCheck() {
  const { pathname } = window.location;
  const navigate = useNavigate();

  useEffect(() => {
    const url = window.location.href;

    if (/^\/allnews\/+$/.test(pathname) || /^\/newpost\/+$/.test(pathname)) {
      const newPathname = pathname.replace(/\/+$/, "");
      navigate(newPathname);
    } else if (pathname !== "/" && pathname.endsWith("/")) {
      window.location.href = url.replace(/\/+$/, "");
    }
  }, [pathname, navigate]);
}

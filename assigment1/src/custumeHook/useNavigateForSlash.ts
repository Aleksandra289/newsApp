import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function useNavigateForSlash() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const multipleSlashes = /http:\/\/localhost:5173\/(\/)+/;
    if (multipleSlashes.test(window.location.href)) {
      window.location.href = "http://localhost:5173/";
    }
    if (pathname !== "/" && pathname.endsWith("/")) {
      const newPathname = pathname.replace(/\/+$/, "");
      navigate(newPathname);
    }
  }, [pathname, navigate]);
}

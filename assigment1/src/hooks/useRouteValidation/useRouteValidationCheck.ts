import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeTrailingSlashes } from "../../shared/regex/removeTrailingSlashes";

export function useRouteValidationCheck() {
  const { pathname } = window.location;
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== "/" && pathname.endsWith("/")) {
      const pathnameWithoutTrailingSlashes = pathname.replace(
        removeTrailingSlashes,
        ""
      );

      pathnameWithoutTrailingSlashes
        ? navigate(pathnameWithoutTrailingSlashes)
        : (location.href = "/");
    }
  }, [pathname, navigate]);
}

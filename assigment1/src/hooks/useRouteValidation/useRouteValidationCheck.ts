import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { regexTrailingSlashes } from "../../shared/regex/regex";

export function useRouteValidationCheck() {
  const { pathname } = window.location;
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== "/" && pathname.endsWith("/")) {
      const pathnameWithoutTrailingSlashes = pathname.replace(
        regexTrailingSlashes,
        ""
      );

      pathnameWithoutTrailingSlashes
        ? navigate(pathnameWithoutTrailingSlashes)
        : (location.href = "/");
    }
  }, [pathname, navigate]);
}

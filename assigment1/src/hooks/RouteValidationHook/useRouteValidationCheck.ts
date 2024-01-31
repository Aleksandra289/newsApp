import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useRouteValidationCheck() {
  const navigate = useNavigate();
  const { protocol, host, pathname } = window.location;
  const url = `${protocol}//${host}`;

  useEffect(() => {
    const multipleSlashes = new RegExp(url + "/(/)+");

    if (multipleSlashes.test(window.location.href)) {
      window.location.href = url;
    }
    if (pathname !== "/" && pathname.endsWith("/")) {
      const newPathname = pathname.replace(/\/+$/, "");
      navigate(newPathname);
    }
  }, [pathname, navigate, url]);
}

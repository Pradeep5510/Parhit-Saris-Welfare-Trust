import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Scroll to top ONLY when pathname changes
    if (prevPathname.current !== pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}


export default ScrollToTop;

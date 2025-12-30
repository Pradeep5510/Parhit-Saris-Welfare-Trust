
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // remove the "#" from hash
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
}

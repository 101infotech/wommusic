// src/hooks/useGtag.ts
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useGtag = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-J6512YDG9J", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

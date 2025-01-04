import {useState, useEffect, useCallback} from "react";

const useScrollVisible = (limit: number) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > limit);
  }, [limit]);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [limit, toggleVisibility]);

  return isVisible;
};

export {useScrollVisible};

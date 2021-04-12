import { useState, useEffect } from "react";

const useVh = () => {
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window?.innerHeight : null
  );
  useEffect(() => {
    // See https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    const vh = windowHeight * 0.01;
    vh && document.documentElement.style.setProperty("--vh", `${vh}px`);
    window?.addEventListener("resize", () =>
      setWindowHeight(window?.innerHeight)
    );
  }, [windowHeight]);
};

export default useVh;

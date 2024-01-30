import { useEffect, useRef, useState } from "react";

export const useJumpyScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [_, setWasAnimationRunning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current;

      if (element) {
        const rect = element.getBoundingClientRect();
        const isElementVisible =
          rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isElementVisible) {
          // Apply your jumpy scroll animation logic here
          setTimeout(() => {
            element.scrollTo({ top: 100, behavior: "smooth" });
          }, 300);
          setTimeout(() => {
            element.scrollTo({ top: 0, behavior: "smooth" });
          }, 600);
          setTimeout(() => {
            element.scrollTo({ top: 50, behavior: "smooth" });
          }, 900);
          setTimeout(() => {
            element.scrollTo({ top: 0, behavior: "smooth" });
          }, 1200);
          setWasAnimationRunning(true);
          window.removeEventListener("scroll", handleScroll); // Remove the event listener after the animation
        } else {
          // Reset the style when the element is not visible
          element.scrollTo({ top: 0 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollRef;
};

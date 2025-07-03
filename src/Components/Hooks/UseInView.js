import { useEffect, useRef, useState } from "react";

export default function useInView(threshold = 0.1) {
  const ref = useRef();
  const [isInView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Remove this if you want it to animate every time
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
}

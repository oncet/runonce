import { useEffect, useRef, useState } from "react";

export default function FadeInOnEntry({ children }) {
  const divRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(divRef.current);
        }
      });
    };

    const observer = new IntersectionObserver(callback);

    observer.observe(divRef.current);
  }, []);

  return (
    <div
      ref={divRef}
      className={
        "flex flex-col gap-7 transition delay-75 duration-500 " +
        (isIntersecting ? "opacity-100" : "opacity-0")
      }
    >
      {children}
    </div>
  );
}

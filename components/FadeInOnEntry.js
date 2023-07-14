import { useEffect, useRef, useState } from "react";

export default function FadeInOnEntry({ children }) {
  const wrapperRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(wrapperRef.current);
        }
      });
    };

    const observer = new IntersectionObserver(callback);

    observer.observe(wrapperRef.current);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={
        "flex flex-col gap-7 transition delay-75 duration-500 print:opacity-100 " +
        (isIntersecting ? "opacity-100" : "opacity-0")
      }
    >
      {children}
    </div>
  );
}

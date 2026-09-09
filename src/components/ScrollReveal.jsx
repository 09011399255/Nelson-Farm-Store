import React, { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 800,
  distance = 44,
  direction = "up",
  threshold = 0.08,
  scale = true,
  scaleAmount = 0.95,
  as: Component = "div",
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    // Trigger when element is cleanly inside the viewport so the user clearly sees the animation
    const isSmall = typeof window !== "undefined" && window.innerHeight < 700;
    const bottomMargin = isSmall ? "-35px" : "-65px";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: threshold ?? 0.08,
        rootMargin: `0px 0px ${bottomMargin} 0px`,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";

    // Ensure effective distance is noticeably impactful even if caller passed a small number
    const effectiveDistance = Math.max(distance, 38);
    const initialScale = scale ? scaleAmount : 1;

    switch (direction) {
      case "up":
        return `translate3d(0, ${effectiveDistance}px, 0) scale(${initialScale})`;
      case "down":
        return `translate3d(0, -${effectiveDistance}px, 0) scale(${initialScale})`;
      case "left":
        return `translate3d(${effectiveDistance}px, 0, 0) scale(${initialScale})`;
      case "right":
        return `translate3d(-${effectiveDistance}px, 0, 0) scale(${initialScale})`;
      case "none":
      default:
        return `translate3d(0, 0, 0) scale(${initialScale})`;
    }
  };

  return (
    <Component
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        ...style,
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}

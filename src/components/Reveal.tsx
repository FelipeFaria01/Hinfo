import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const directions = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transform
        transition-all
        duration-700
        ease-out
        ${
          visible
            ? "translate-x-0 translate-y-0 opacity-100"
            : `${directions[direction]} opacity-0`
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedNumber({ value, duration = 2000 }) {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const startTimeRef = useRef(null);
  const valueWithoutPlus = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    if (inView) {
      const animate = (timestamp) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const progress = timestamp - startTimeRef.current;
        const percentage = Math.min(progress / duration, 1);

        setCurrent(Math.floor(valueWithoutPlus * percentage));

        if (progress < duration) {
          requestAnimationFrame(animate);
        } else {
          setCurrent(valueWithoutPlus);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, valueWithoutPlus, duration]);

  return (
    <span ref={ref}>
      {current.toLocaleString()}
      {value.includes("+") ? "+" : ""}
    </span>
  );
}

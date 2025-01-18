import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const handleMouseEnter = () => {
      setScale(1);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseLeave = () => {
      setScale(0);
    };
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <motion.div
      className="fixed z-50 top-0 left-0 pointer-events-none hidden md:block"
      initial={{ scale: 0 }}
      animate={{
        scale: scale,
        x: position.x,
        y: position.y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      transition={{ easings: "easeInOut", duration: 0.1 }}
    >
      <div className="size-5 bg-secondary rounded-full" />
    </motion.div>
  );
}

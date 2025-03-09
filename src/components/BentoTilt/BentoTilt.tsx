import { useRef, useState } from "react";
import { BentoTiltProps } from "./BentoTilt.interface";

const BentoTilt = ({ children, className }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState("");
  const bentoCardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (bentoCardRef.current === null) return;
    const { left, top, width, height } =
      bentoCardRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    setTransformStyle(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={bentoCardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export default BentoTilt;

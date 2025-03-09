import { useRef, useState } from "react";
import { BentoTiltProps } from "./BentoTilt.interface";
import { handleMouseLeave, handleMouseMove } from "./BentoTiltHandlers";

const BentoTilt = ({ children, className }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState("");
  const bentoCardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={className}
      ref={bentoCardRef}
      onMouseMove={(() => handleMouseMove(bentoCardRef, setTransformStyle))()}
      onMouseLeave={(() => handleMouseLeave(setTransformStyle))()}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export default BentoTilt;

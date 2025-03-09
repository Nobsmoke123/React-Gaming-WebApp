import React from "react";

export const handleMouseMove =
  (
    bentoCardRef: React.RefObject<HTMLDivElement | null>,
    setTransformStyle: React.Dispatch<React.SetStateAction<string>>
  ) =>
  (e: React.MouseEvent) => {
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

export const handleMouseLeave =
  (setTransformStyle: React.Dispatch<React.SetStateAction<string>>) => () => {
    setTransformStyle("");
  };

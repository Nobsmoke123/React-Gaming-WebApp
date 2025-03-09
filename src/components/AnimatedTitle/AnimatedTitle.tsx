import { useEffect, useRef } from "react";
import { AnimatedTitleProps } from "./AnimatedTitle.interface";
import gsap from "gsap";

const AnimatedTitle = ({
  title,
  containerClass,
  sectionId,
}: AnimatedTitleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Using gsap context to scope the animation to this context.
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);
    // Clean up the context on unmounting
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`animated-title ${containerClass}`}
      id={sectionId ? sectionId : ""}
    >
      {title.split("<br />").map((line: string, index: number) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word: string, i: number) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;

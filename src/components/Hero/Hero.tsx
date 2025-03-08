import { useRef, useState } from "react";
import {
  getVideoSource,
  handleMiniVideoPlayerClickEvent,
  handleVideoLoad,
} from "./HeroHandlers";
import Button from "../Button/Button";
import { TiLocation } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const TOTAL_VIDEOS = 4;

  const upcomingVideoIndex =
    currentIndex === 3 ? 0 : (currentIndex % TOTAL_VIDEOS) + 1;

  const nextVideoRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            if (nextVideoRef.current) {
              nextVideoRef.current.play();
            }
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={(() =>
                handleMiniVideoPlayerClickEvent(
                  setHasClicked,
                  setCurrentIndex
                ))()}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                src={getVideoSource(upcomingVideoIndex)}
                ref={nextVideoRef}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={(() =>
                  handleVideoLoad(currentIndex, setLoadedVideos))()}
              />
            </div>
          </div>

          <video
            src={getVideoSource(currentIndex)}
            ref={nextVideoRef}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-center object-cover"
            onLoadedData={(() =>
              handleVideoLoad(currentIndex, setLoadedVideos))()}
          />

          <video
            src={getVideoSource(currentIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Redefi<b>n</b>e
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy.
            </p>

            <Button
              id="watch-trailer"
              title="watch Trailer"
              leftIcon={<TiLocation />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;

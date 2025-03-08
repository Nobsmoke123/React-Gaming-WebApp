import { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const TOTAL_VIDEOS = 4;

  const upcomingVideoIndex =
    currentIndex === 3 ? 0 : (currentIndex % TOTAL_VIDEOS) + 1;

  const nextVideoRef = useRef(null);

  const handleMiniVideoPlayerClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  const getVideoSource = (index: number) => {
    return `videos/hero-${index}.mp4`;
  };

  const handleVideoLoad = () => {
    setLoadedVideos(currentIndex);
  };

  //   h-dvh = height dynamic view height
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVideoPlayerClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                src={getVideoSource(upcomingVideoIndex)}
                ref={nextVideoRef}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
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
            onLoadedData={handleVideoLoad}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

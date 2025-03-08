export const getVideoSource = (index: number) => {
  return `videos/hero-${index}.mp4`;
};

export const handleMiniVideoPlayerClickEvent =
  (
    setHasClicked: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  ) =>
  () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

export const handleVideoLoad =
  (
    currentIndex: number,
    setLoadedVideos: React.Dispatch<React.SetStateAction<number>>
  ): React.ReactEventHandler<HTMLVideoElement> =>
  () => {
    setLoadedVideos(currentIndex);
  };

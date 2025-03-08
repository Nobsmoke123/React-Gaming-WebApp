/**
 *
 * @param index
 * @returns string
 */
export const getVideoSource = (index: number) => {
  return `videos/hero-${index}.mp4`;
};

/**
 *
 * @param setHasClicked
 * @param setCurrentIndex
 * @returns void
 */
export const handleMiniVideoPlayerClickEvent =
  (
    setHasClicked: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  ) =>
  () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

/**
 *
 * @param setLoadedVideos
 * @returns void
 */
export const handleVideoLoad =
  (
    setLoadedVideos: React.Dispatch<React.SetStateAction<number>>
  ): React.ReactEventHandler<HTMLVideoElement> =>
  () => {
    setLoadedVideos((prev) => prev + 1);
  };

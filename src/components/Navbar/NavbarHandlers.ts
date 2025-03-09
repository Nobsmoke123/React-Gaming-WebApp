export const toggleAudioButtonClickHandler =
  (
    setIsAudioPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    setIsIndicatorActive: React.Dispatch<React.SetStateAction<boolean>>
  ) =>
  () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

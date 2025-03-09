import { ImageClipBoxProps } from "./ImageClipBox.interface";

const ImageClipBox = ({ src, clipClass }: ImageClipBoxProps) => {
  return (
    <div className={clipClass}>
      <img src={src} alt="clip-image" />
    </div>
  );
};

export default ImageClipBox;

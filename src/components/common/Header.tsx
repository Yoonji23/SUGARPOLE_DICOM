import { useMoveImage } from "../../hooks/useMoveImage";
import { Button } from "./Button";
import { Category } from "./Category";

export const Header = () => {
  const { moveToNextImage, moveToPreviousImage } = useMoveImage();

  return (
    <header className="header flex-center">
      <h1 className="font-viewer pr-[24px]">
        Dicom Viewer(with Cornerstone.js)
      </h1>
      <nav>
        <ul className="flex gap-[16px]">
          <Category>Zoom</Category>
          <Category>Flip H</Category>
          <Category>Flip V</Category>
          <Category>Rotate Delta 30</Category>
          <Category>Invert</Category>
          <Category>Apply Colormap</Category>
          <Category>Reset</Category>
        </ul>
      </nav>

      <Button onClick={moveToPreviousImage}>Previous Image</Button>
      <Button onClick={moveToNextImage}>Next Image</Button>
    </header>
  );
};

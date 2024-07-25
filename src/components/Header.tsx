import { Button } from "./common/Button";
import { Category } from "./common/Category";

export const Header = () => {
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

      <Button>Previous Image</Button>
      <Button>Next Image</Button>
    </header>
  );
};

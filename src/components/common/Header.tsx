import { Button } from "./Button";
import { Category } from "./Category";
import {
  useGetCurrentPage,
  useUpdateCurrentPage,
} from "../../hooks/usePageState";

interface HeaderProps {
  handleClickFeature: (feat: string) => void;
}
export const Header = (props: HeaderProps) => {
  const { handleClickFeature } = props;
  const { data: currentPage } = useGetCurrentPage();
  const { mutate: updateCurrentPage } = useUpdateCurrentPage();
  if (currentPage === undefined) return;

  const handleClickPrevious = () => {
    if (currentPage > 0) {
      updateCurrentPage(currentPage - 1);
    } else {
      window.alert("첫 번째 이미지입니다.");
    }
  };
  const handleClickNext = () => {
    if (currentPage < 2) {
      updateCurrentPage(currentPage + 1);
    } else {
      window.alert("마지막 이미지입니다.");
    }
  };
  return (
    <header className="header flex-center">
      <h1 className="font-viewer pr-[24px]">
        Dicom Viewer(with Cornerstone.js)
      </h1>
      <nav>
        <ul className="flex gap-[16px]">
          <Category onClick={() => handleClickFeature("Zoom")}>Zoom</Category>
          <Category onClick={() => handleClickFeature("FlipH")}>
            Flip H
          </Category>
          <Category onClick={() => handleClickFeature("FlipV")}>
            Flip V
          </Category>
          <Category onClick={() => handleClickFeature("RotateDelta")}>
            Rotate Delta 30
          </Category>
          <Category onClick={() => handleClickFeature("Invert")}>
            Invert
          </Category>
          <Category onClick={() => handleClickFeature("ApplyColormap")}>
            Apply Colormap
          </Category>
          <Category onClick={() => handleClickFeature("Reset")}>Reset</Category>
        </ul>
      </nav>

      <Button onClick={handleClickPrevious}>Previous Image</Button>
      <Button onClick={handleClickNext}>Next Image</Button>
    </header>
  );
};

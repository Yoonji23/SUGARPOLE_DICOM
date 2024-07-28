import * as cornerstone from "cornerstone-core";
import { Dispatch } from "react";

// Viewport 조작을 위한 유틸리티 함수
interface ApplyViewportOperationProps {
  feature: string;
  setFeature: Dispatch<React.SetStateAction<string | null>>;
  element: HTMLElement;
}
export const applyViewportOperation = (props: ApplyViewportOperationProps) => {
  const { feature, setFeature, element } = props;

  const viewport = cornerstone.getViewport(element);

  if (viewport) {
    switch (feature) {
      case "Zoom":
        window.alert("죄송합니다. 아직 사용 불가 서비스입니다.");
        break;
      case "FlipH":
        viewport.hflip = !viewport.hflip;
        cornerstone.setViewport(element, viewport);
        break;
      case "FlipV":
        viewport.vflip = !viewport.vflip;
        cornerstone.setViewport(element, viewport);
        break;

      case "RotateDelta":
        viewport.rotation = (viewport.rotation + 30) % 360;
        cornerstone.setViewport(element, viewport);
        break;
      case "Invert":
        viewport.invert = !viewport.invert;
        cornerstone.setViewport(element, viewport);
        break;

      case "ApplyColormap":
        if (viewport.colormap && viewport.colormap !== "gray") {
          viewport.colormap = "gray";
          cornerstone.setViewport(element, viewport);
          break;
        }
        viewport.colormap = "autumn";
        cornerstone.setViewport(element, viewport);
        break;

      case "Reset":
        cornerstone.reset(element);
        break;
    }
    setFeature(null); // 토글처럼 기능을 껐다 킬 수 있도록 초기화 처리
  }
};

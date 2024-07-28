import * as cornerstone from "cornerstone-core";
import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import dicomParser from "dicom-parser";
import { Dispatch, useEffect, useRef } from "react";

import { applyViewportOperation } from "../../utils/helpers/applyViewportOperation";
import { useGetCurrentPage } from "../../hooks/usePageState";

interface ImageLoaderProps {
  feature: string | null;
  setFeature: Dispatch<React.SetStateAction<string | null>>;
  isSelected: boolean;
  imageFileName: string;
}

export const ImageLoader = (props: ImageLoaderProps) => {
  const { feature, setFeature, isSelected, imageFileName } = props;
  const { data: currentPage } = useGetCurrentPage();
  const elementRef = useRef<HTMLDivElement>(null);
  const imageId = `wadouri:${window.location.origin}/dicom/${imageFileName}`;

  useEffect(() => {
    if (isSelected) {
      setFeature(null);
      const element = elementRef.current;
      if (element && feature) {
        applyViewportOperation({
          feature: feature,
          setFeature,
          element: element,
        });
      }
    }
  }, [isSelected, feature]);

  useEffect(() => {
    if (!elementRef.current) return;
    const element = elementRef.current;

    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
    cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

    cornerstone.enable(element);

    cornerstone.loadImage(imageId).then((image) => {
      cornerstone.displayImage(element, image);

      localStorage.clear();
    });
  }, [currentPage]);

  return (
    <div
      ref={elementRef}
      className="flex flex-center w-[709px] h-[897px]"
    ></div>
  );
};

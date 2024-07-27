import * as cornerstone from "cornerstone-core";
import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import dicomParser from "dicom-parser";
import { useEffect } from "react";
import dicomImg from "../../utils/constants/dicomFile";
import { usePageState } from "../../hooks/usePageState";

export const ImageLoader = () => {
  const { currentPage } = usePageState();
  const imagesPerPage: number = 2;
  const imageIds = dicomImg.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );
  console.log("imageIds", imageIds);

  useEffect(() => {
    const loadImages = async () => {
      const content = document.getElementById("content");
      if (!content) return;
      content.innerHTML = ""; // 이전 이미지 값 초기화
      cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
      cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

      imageIds.forEach(async (imageFileName) => {
        const imageId = `wadouri:${window.location.origin}/dicom/${imageFileName}`;
        const element = document.createElement("div");
        element.style.width = "50vw";
        element.style.height = "88vh";
        content.appendChild(element);

        cornerstone.enable(element);

        try {
          const image = await cornerstone.loadImage(imageId);
          cornerstone.displayImage(element, image);
        } catch (error) {
          console.error("Failed to load image:", error);
        }
      });
    };

    loadImages();
  }, [currentPage]);

  return <div id="content" className="flex-center gap-[7px]"></div>;
};

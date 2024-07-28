import { Dispatch, useEffect, useState } from "react";
import { ImageLoader } from "../components/imageLoad/ImageLoader";
import dicomImg from "../utils/constants/dicomFile";
import { useGetCurrentPage } from "../hooks/usePageState";

interface DicomViewProps {
  feature: string | null;
  setFeature: Dispatch<React.SetStateAction<string | null>>;
}
export const DicomView = (props: DicomViewProps) => {
  const { feature, setFeature } = props;
  const { data: currentPage } = useGetCurrentPage();

  const imagesPerPage: number = 2;

  const imageIds = dicomImg.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  const [selectedImgName, setSelectedImgName] = useState<string | null>(null);

  const handleSelectImgName = (name: string) => {
    if (selectedImgName !== null && name === selectedImgName) {
      setSelectedImgName(null);
      return;
    }
    setSelectedImgName(name);
    setFeature(null);
  };

  return (
    <div className="flex gap-[7px] items-center justify-center ">
      {imageIds.map((item, idx) => {
        return (
          <div key={idx} onClick={() => handleSelectImgName(item)}>
            <ImageLoader
              imageFileName={item}
              isSelected={item === selectedImgName}
              feature={feature}
              setFeature={setFeature}
            />
          </div>
        );
      })}
    </div>
  );
};

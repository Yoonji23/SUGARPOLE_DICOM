import { usePageState } from "./usePageState";

export const useMoveImage = () => {
  const { currentPage, setCurrentPage } = usePageState();

  const moveToNextImage = () =>
    setCurrentPage(currentPage < 2 ? currentPage + 1 : 2);
  const moveToPreviousImage = () =>
    setCurrentPage(currentPage > 0 ? currentPage - 1 : 0);
  return { moveToNextImage, moveToPreviousImage };
};

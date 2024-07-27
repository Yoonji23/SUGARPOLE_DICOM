import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const getCurrentPage = async () => {
  const page = localStorage.getItem("currentPage");

  return page ? parseInt(page, 10) : 0;
};

const updatePage = async (newPage: number) => {
  localStorage.setItem("currentPage", newPage.toString());
  return newPage;
};

export const usePageState = () => {
  const queryClient = useQueryClient();

  const { data: currentPage = 0 } = useQuery({
    queryKey: ["currentPage"],
    queryFn: getCurrentPage,
  });

  /**DICOM VIEW 페이지 업데이트 */
  const updateDicomView = useMutation({
    mutationFn: updatePage,
    onSuccess: (newPage) => {
      queryClient.invalidateQueries({ queryKey: ["currentPage"] });
    },
  });

  /** 페이지 상태를 업데이트하는 함수 */
  const setCurrentPage = (newPage: number) => {
    updateDicomView.mutate(newPage);
  };

  return { currentPage, setCurrentPage };
};

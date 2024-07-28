import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const getCurrentPage = async () => {
  const page = localStorage.getItem("currentPage");

  return page ? parseInt(page, 10) : 0;
};

const updatePage = async (newPage: number) => {
  localStorage.setItem("currentPage", newPage.toString());
  return newPage;
};

export const useGetCurrentPage = () => {
  return useQuery({
    queryKey: ["currentPage"],
    queryFn: getCurrentPage,
    initialData: 0,
  });
};

export const useUpdateCurrentPage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentPage"] });
    },
  });
};

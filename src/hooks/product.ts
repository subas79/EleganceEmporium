import { useQuery } from "@tanstack/react-query";
import { product } from "../Apis/Api";
import { queryKeys } from "../utils/constants/queryKeys";

export const useGetProduct = () => {
  return useQuery({
    queryFn: product,
    queryKey: [queryKeys.allProducts],
  });
};
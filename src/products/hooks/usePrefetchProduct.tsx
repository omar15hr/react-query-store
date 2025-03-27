import { useQueryClient } from "@tanstack/react-query";
import { getProductById } from "../services/actions";

export function usePrefetchProduct() {

  const queryClient = useQueryClient();

  const preFetchProduct = (id:number) => {
    queryClient.prefetchQuery({
      queryKey: ["product", id],
      queryFn: () => getProductById(id),
    })
  }

  return preFetchProduct
}
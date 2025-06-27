import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useProduct = () => {
  const getProduct = (params) =>
    useQuery({
      queryKey: ["product", params],
      queryFn: () => api.get("/products", { params }),
    });


    return{ getProduct}
};

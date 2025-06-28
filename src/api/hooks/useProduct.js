import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";

export const useProduct = () => {
  const getProduct = (params) =>
    useQuery({
      queryKey: ["product", params],
      queryFn: () => api.get("/products", { params }),
    });

  const getOneProduct = (id) =>
    useQuery({
      queryKey: ["product", id],
      queryFn: () => api.get(`/products/${id}`).then((res) => res.data),
      enabled: !!id,
    });

  const getSearchProduct = (params) =>
    useQuery({
      queryKey: ["search", params],
      queryFn: () => api.get("/products/search", { params }),
      enabled: !!params?.q,
    });

  return { getProduct, getSearchProduct, getOneProduct };
};

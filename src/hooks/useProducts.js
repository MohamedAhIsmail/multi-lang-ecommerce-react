import { getProducts } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "./useLanguage";

export function useProducts() {
  const { language } = useLanguage();
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", language],
    queryFn: () => getProducts(language),
  });

  return { products, isLoading };
}

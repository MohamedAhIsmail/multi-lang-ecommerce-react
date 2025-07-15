import { getSingleProduct } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "./useLanguage";

export function useProductBySlug(slug) {
  const { language } = useLanguage();
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", language, slug],
    queryFn: () => getSingleProduct(slug, language),
  });

  return { product, isLoading };
}

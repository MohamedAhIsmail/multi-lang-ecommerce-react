import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "./useLanguage";
import { getCategoryBySlug } from "@/services/apiCategories";

export function useCategoryBySlug(slug) {
  const { language } = useLanguage();

  const { data: category, isLoading } = useQuery({
    queryKey: ["category", slug, language],
    queryFn: () => getCategoryBySlug(slug, language),
  });

  return { category, isLoading };
}

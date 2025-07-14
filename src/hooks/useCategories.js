import { getCategories } from "@/services/apiCategories";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "./useLanguage";

export function useCategories() {
  const { language } = useLanguage();
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories", language],
    queryFn: () => getCategories(language),
  });

  return { categories, isLoading, isError };
}

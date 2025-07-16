import { useCategories } from "@/hooks/useCategories";
import CategoryCard from "./CategoryCard";
import useCategoriesStore from "@/store/categoriesStore";
import CatsLoading from "../Skeleton/CatsLoading";
import { filterAndSort } from "@/utils/filterAndSort";
import NoResultsMessage from "../NoResultsMessage";

function CategoriesGrid() {
  const { categories, isLoading } = useCategories();
  const { searchTerm, sortType } = useCategoriesStore();

  if (isLoading) return <CatsLoading />;

  const filteredCategories = filterAndSort(categories, searchTerm, sortType);

  if (filteredCategories.length === 0) return <NoResultsMessage />;

  return (
    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {filteredCategories.map((cat) => (
        <CategoryCard category={cat} key={cat.id} />
      ))}
    </div>
  );
}

export default CategoriesGrid;

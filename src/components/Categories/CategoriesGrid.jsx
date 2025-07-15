import { useCategories } from "@/hooks/useCategories";
import CategoryCard from "./CategoryCard";
import useCategoriesStore from "@/store/categoriesStore";
import CatsLoading from "../Skeleton/CatsLoading";

function CategoriesGrid() {
  const { categories, isLoading } = useCategories();
  const { searchTerm } = useCategoriesStore();

  if (isLoading) return <CatsLoading />;

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {filteredCategories.map((cat) => (
        <CategoryCard category={cat} key={cat.id} />
      ))}
    </div>
  );
}

export default CategoriesGrid;

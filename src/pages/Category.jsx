import BreadcrumbDynamic from "@/components/BreadcrumbDynamic";
import { useCategoryBySlug } from "@/hooks/useCategoryBySlug";
import { useParams } from "react-router-dom";

function Category() {
  const { slug } = useParams();
  const { category, isLoading } = useCategoryBySlug(slug);

  return (
    <div>
      <div className="container">
        <BreadcrumbDynamic customLastName={category?.name || ""} />
        <h1>test: {category?.name}</h1>
      </div>
    </div>
  );
}

export default Category;

import BreadcrumbDynamic from "@/components/BreadcrumbDynamic";
import { useCategoryBySlug } from "@/hooks/useCategoryBySlug";
import { useParams } from "react-router-dom";

function Category() {
  const { slug } = useParams();
  const { category } = useCategoryBySlug(slug);
  console.log(category);

  return (
    <div>
      <div className="container">
        <BreadcrumbDynamic />
        <h1>container</h1>
      </div>
    </div>
  );
}

export default Category;

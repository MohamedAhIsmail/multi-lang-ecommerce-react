import BreadcrumbDynamic from "@/components/BreadcrumbDynamic";
import { useCategories } from "@/hooks/useCategories";
import { Link } from "react-router-dom";

function Categories() {
  const { categories, isLoading } = useCategories();

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <div className="container">
        <BreadcrumbDynamic />
        <h1>Categories</h1>
        <section className="py-8">
          <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories?.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.slug}`}
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
              >
                <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
                <p className="text-sm text-gray-600">
                  {category.description.slice(0, 80)}...
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Categories;

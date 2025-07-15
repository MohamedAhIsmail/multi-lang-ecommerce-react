import BreadcrumbDynamic from "@/components/BreadcrumbDynamic";
import Actions from "@/components/Categories/Actions";
import CategoriesGrid from "@/components/Categories/CategoriesGrid";
import CatsLoading from "@/components/Skeleton/CatsLoading";
import { useCategories } from "@/hooks/useCategories";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Categories() {
  const { t } = useTranslation();
  const { categories, isLoading } = useCategories();
  const [searchCats, setSearchCats] = useState("");

  if (isLoading) return <CatsLoading />;
  const newCats = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchCats.toLocaleLowerCase())
  );

  return (
    <section>
      <div className="container">
        <BreadcrumbDynamic />
        <h1 className="text-4xl text-heading">{t("breadcrumb.categories")}</h1>
        <Actions />
        <CategoriesGrid categories={categories} />
        {/* <section className="py-8">
          <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newCats?.map((category) => (
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
        </section> */}
      </div>
    </section>
  );
}

export default Categories;

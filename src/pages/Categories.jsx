import BreadcrumbDynamic from "@/components/BreadcrumbDynamic";
import Actions from "@/components/Categories/Actions";
import CategoriesGrid from "@/components/Categories/CategoriesGrid";
import { useTranslation } from "react-i18next";

function Categories() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <BreadcrumbDynamic />
        <h1 className="text-4xl text-heading">{t("breadcrumb.categories")}</h1>
        <Actions />
        <CategoriesGrid />
      </div>
    </section>
  );
}

export default Categories;

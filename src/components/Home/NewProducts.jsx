import { useTranslation } from "react-i18next";
import CommingSoon from "./CommingSoon";

function NewProducts() {
  const { t } = useTranslation();

  return (
    <section className="py-8">
      <div className="container">
        <h2 className="text-heading text-3xl font-semibold mb-10">
          {t("newArrivals")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[.75fr_2fr]">
          <CommingSoon />
        </div>
      </div>
    </section>
  );
}

export default NewProducts;

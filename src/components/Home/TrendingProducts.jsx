import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { HiMiniChevronRight, HiMiniChevronLeft } from "react-icons/hi2";

import { Link } from "react-router-dom";

function TrendingProducts() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section className="py-8">
      <div className="container">
        <div className="flex justify-between items-center pb-5 border-b-2">
          <h2 className="text-heading text-3xl font-semibold">
            {t("trendingProducts")}
          </h2>
          <Link
            to="/products"
            className="px-3 py-2 bg-background-second rounded-full flex items-center"
          >
            {t("viewAll")}{" "}
            {language === "en" ? <HiMiniChevronRight size={22} /> : <HiMiniChevronLeft size={22} />}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TrendingProducts;

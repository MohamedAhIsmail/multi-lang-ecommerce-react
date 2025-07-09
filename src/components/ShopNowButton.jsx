import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";

function ShopNowButton() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <button
      className={`text-white bg-[#F55266] px-3 py-2 md:px-4 md:py-2 rounded-md cursor-pointer hover:bg-[#f55265d4] transition-all duration-300 w-fit flex items-center gap-2 btn-shadow`}
    >
      {t("shopNow")}{" "}
      <span className="transtion-all duration-600 animate-ping"> {language === "en" ? <HiChevronRight /> : <HiChevronLeft />}</span>
    </button>
  );
}

export default ShopNowButton;

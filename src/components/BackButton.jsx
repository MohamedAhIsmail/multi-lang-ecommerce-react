import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";

function BackButton({ path, label }) {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <Link
      to={`/${path}`}
      className="cursor-pointer flex items-center gap-2 border px-3 py-2 rounded-sm"
    >
      {t("backButton.backTo")} {t(`backButton.${label}`)}{" "}
      {language === "en" ? <HiMiniArrowLongRight /> : <HiMiniArrowLongLeft />}
    </Link>
  );
}

export default BackButton;

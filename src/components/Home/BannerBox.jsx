import { useTranslation } from "react-i18next";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import { useLanguage } from "../../hooks/useLanguage";
import { Link } from "react-router-dom";

function BannerBox({ banner }) {
  const { t } = useTranslation();
  const { background, image, textKey, btnColor } = banner;
  const { language } = useLanguage();

  return (
    <div className={`${background} rounded-lg p-4 flex items-center w-full`}>
      <div>
        <img src={image} alt="" className="w-50" />
      </div>
      <div>
        <h2
          className="text-xl font-light"
          dangerouslySetInnerHTML={{ __html: t(textKey) }}
        />

        <Link
          className={`${btnColor} text-sm mt-2 text-tex flex items-center gap-1`}
        >
          {t("shopNow")}{" "}
          <span className="transition-all duration-600 animate-ping">
            {language === "en" ? <HiChevronRight /> : <HiChevronLeft />}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default BannerBox;

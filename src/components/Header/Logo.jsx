import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Logo() {
  const { t } = useTranslation();

  return (
    <Link to="/" className="w-[108px]">
      <h1 className="text-heading text-xl font-semibold text-center">
        {t("logo")}
      </h1>
    </Link>
  );
}

export default Logo;

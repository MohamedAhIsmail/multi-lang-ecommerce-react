import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ChangeLanguage from "../ChangeLanguage";

function TopHeader() {
  const { t } = useTranslation();
  return (
    <div className="text-text-main py-3">
      <div className="container flex justify-between items-center">
        <ChangeLanguage />
        <p className="hidden md:block">{t("sale")}</p>
        <div className="flex gap-3">
          <Link to="/">{t("wishlist")}</Link>
          <Link to="/">{t("account")}</Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ChangeLanguage from "../ChangeLanguage";

function TopHeader() {
  const { t } = useTranslation();
  return (
    <div className="bg-background-second p-3 text-text-main">
      <div className="container flex justify-between items-center">
        {/* <p>
          {t("contactUs")}{" "}
          <span className="font-semibold">+1 50 537 53 082</span>
        </p> */}
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

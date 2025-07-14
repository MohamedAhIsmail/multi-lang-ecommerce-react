// import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ChangeLanguage from "../ChangeLanguage";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { Badge } from "../ui/badge";

function TopHeader() {
  // const { t } = useTranslation();
  return (
    <div className="text-text-main py-4">
      <div className="container flex justify-between items-center">
        <ChangeLanguage />
        {/* <p className="hidden md:block">{t("sale")}</p> */}
        <div className="flex items-center gap-3 text-2xl">
          <Link to="/" className="relative">
            <HiOutlineHeart />
            <Badge className="bg-button-main absolute -top-2 -right-3 w-5 h-5 ">
              0
            </Badge>
          </Link>
          <Link to="/" className="flex items-center gap-1">
            <HiOutlineUser />
            <p className="text-sm">Mohamed</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;

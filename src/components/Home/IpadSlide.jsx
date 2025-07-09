import { useTranslation } from "react-i18next";
import ipad from "../../assets/ipad.png";
import ShopNowButton from "../ShopNowButton";

function IpadSlide() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center p-2 md:p-5">
      <div className="text-heading flex justify-center">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-2xl md:text-4xl font-light mb-4">{t("explor")}</p>
          <h2 className="text-4xl md:text-5xl">{t("ipadCollection")}</h2>
          <p className="text-lg md:text-xl font-light mt-2 mb-5">
            {t("onTheMarket")}
          </p>
          <ShopNowButton />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src={ipad} alt="Ipad" className="w-[80%]" />
      </div>
    </div>
  );
}

export default IpadSlide;

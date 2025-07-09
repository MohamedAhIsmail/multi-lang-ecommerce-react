import headphone from "../../assets/head.webp";
import ShopNowButton from "../ShopNowButton";
import { useTranslation } from "react-i18next";

function HeadphoneSlide() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center p-2 md:p-5">
      <div className="text-heading flex justify-center">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-2xl md:text-4xl font-light mb-4">
            {t("worldOfSounds")}
          </p>
          <h2 className="text-4xl md:text-5xl">{t("headphones")}</h2>
          <p className="text-lg md:text-xl font-light mt-2 mb-5">
            {t("chooseBetweenTop")}
          </p>
          <ShopNowButton />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src={headphone} alt="HeadpPhone" className="w-[80%]" />
      </div>
    </div>
  );
}

export default HeadphoneSlide;

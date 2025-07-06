import { useTranslation } from "react-i18next";
import { HiLink } from "react-icons/hi2";
import iphone from "../../assets/imagephone.png";
import Button from "../Button";

function IphonBannar() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-5 bg-[#B0CDEF] dark:bg-[#1B2739] rounded-xl col-span-1">
      <div>
        <img src={iphone} alt="iphone" />
      </div>
      <div className="flex flex-col gap-5 px-2">
        <div>
          <h2 className="my-1 text-xl md:text-2xl font-semibold text-heading">
            iPhone 14
          </h2>
          <p className="text-sm dark:text-white">Apple IPhone 14 128GB Blue</p>
        </div>
        <button className="flex items-center w-fit text-white text-[11px] md:text-[16px] px-1.5 py-2 md:px-4 md:py-2  bg-[#F55266] rounded-md cursor-pointer hover:bg-[#f55265d4] transition-all duration-300 gap-1 ">
          {" "}
          {t("from")} <HiLink />
        </button>
      </div>
    </div>
  );
}

export default IphonBannar;

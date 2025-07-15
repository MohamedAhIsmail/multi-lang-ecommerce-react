import { useTranslation } from "react-i18next";
import { CiBatteryEmpty } from "react-icons/ci";

function NoResultsMessage() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col justify-center items-center text-3xl md:text-4xl p-5 min-h-72 text-gray-600 text-center">
      <CiBatteryEmpty className="text-button-main text-8xl" />
      <h2 className="my-5">{t("notFoundSearch")}</h2>
      <p className="text-2xl">{t("notFoundSearchMessage")}</p>
    </div>
  );
}

export default NoResultsMessage;

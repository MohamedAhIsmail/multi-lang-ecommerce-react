import light from "../../assets/404-light.svg";
import dark from "../../assets/404-dark.svg";
import { useDarkMode } from "../../context/DarkModeContext";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import { Link } from "react-router-dom";

function NotFoundMessage() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <section className="pt-20">
      <div className="container">
        <div className="flex justify-center">
          <img src={isDarkMode ? dark : light} alt="Error Bannar" className="h-[150px]"/>
        </div>
        <div className="my-8 text-center">
          <h1 className=" text-4xl font-bold text-heading">{t("notFound")}</h1>
          <p className="my-6 text-text-second">{t("notFoundText")}</p>
          <div className="flex justify-center">
            <Link to="/">
              <Button>{t("goToHome")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundMessage;

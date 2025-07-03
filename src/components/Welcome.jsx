import { useTranslation } from "react-i18next";
import ChangeLanguage from "./ChangeLanguage";

function Welcome() {
  const { t } = useTranslation();

  return (
    <>
      <div>{t("welcomeToReact")}</div>
      <ChangeLanguage />
    </>
  );
}

export default Welcome;

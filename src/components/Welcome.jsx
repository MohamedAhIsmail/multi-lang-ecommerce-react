import { useTranslation } from "react-i18next"

function Welcome() {
  const {t} = useTranslation()

  return (
    <div>{t("welcomeToReact")}</div>
  )
}

export default Welcome
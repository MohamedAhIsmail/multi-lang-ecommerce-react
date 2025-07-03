import Cookies from "js-cookie";
import i18n from "i18next";
import { useEffect } from "react";

function ChangeLanguage() {
  const lng = Cookies.get("i18next") || "en";

  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lng]);

  return (
    <div>
      <button onClick={() => i18n.changeLanguage("ar")}>AR</button>
      <button onClick={() => i18n.changeLanguage("en")}>En</button>
    </div>
  );
}

export default ChangeLanguage;

import Cookies from "js-cookie";
import i18n from "i18next";
import { useEffect } from "react";

const languages = [
  {
    name: "English",
    flag: "us",
    code: "en",
  },
  {
    name: "العربية",
    flag: "sa",
    code: "ar",
  },
];

function ChangeLanguage() {
  const lng = Cookies.get("i18next") || "en";

  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lng]);

  return (
    <>
      <div>
        <button onClick={() => i18n.changeLanguage("ar")}>AR</button>
        <button onClick={() => i18n.changeLanguage("en")}>En</button>
      </div>

      <select value={lng} onChange={(e) => i18n.changeLanguage(e.target.value)}>
        {languages.map(({ name, flag, code }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
        {/* <option disabled={lng === "en"} value="en">
          English
        </option>
        <option disabled={lng === "ar"} value="ar">
          العربية
        </option> */}
      </select>
    </>
  );
}

export default ChangeLanguage;

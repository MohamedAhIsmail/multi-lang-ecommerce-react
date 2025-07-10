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
    <select
      value={lng}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="outline-0 cursor-pointer p-2"
    >
      {languages.map(({ name, code }) => (
        <option
          value={code}
          key={code}
          className="bg-background-main cursor-pointer"
        >
          {name}
        </option>
      ))}
    </select>
  );
}

export default ChangeLanguage;

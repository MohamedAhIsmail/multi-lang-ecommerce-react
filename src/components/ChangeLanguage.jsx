import Cookies from "js-cookie";
import i18n from "i18next";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <Select value={lng} onValueChange={(val) => i18n.changeLanguage(val)}>
      <SelectTrigger className="w-[130px] cursor-pointer">
        <SelectValue placeholder="Language">
          {lng === "ar" ? "العربية" : "English"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="dark:bg-background-main">
        {languages.map(({ name, code }) => (
          <SelectItem key={code} value={code} className="cursor-pointer">
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default ChangeLanguage;

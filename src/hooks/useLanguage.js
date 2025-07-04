import i18n from "i18next";

import { useEffect, useState } from "react";

export function useLanguage() {
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const handler = (lng) => setLanguage(lng);
    i18n.on("languageChanged", handler);
    return () => i18n.off("languageChanged", handler);
  }, []);

  return { language };
}

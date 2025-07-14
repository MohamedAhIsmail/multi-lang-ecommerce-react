import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function useBreadcrumbItems(customLastName = "") {
  const location = useLocation();
  const { t } = useTranslation();

  const segments = location.pathname.split("/").filter(Boolean);

  const items = segments.map((segment, index) => {
    const to = "/" + segments.slice(0, index + 1).join("/");

    const translated = t(`breadcrumb.${segment}`, segment);
    return {
      name: decodeURIComponent(
        customLastName && index === segments.length - 1
          ? customLastName
          : translated
      )
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
      to,
      isLast: index === segments.length - 1,
    };
  });

  return [
    {
      name: t("breadcrumb.home"),
      to: "/",
      isLast: segments.length === 0,
    },
    ...items,
  ];
}

import { useLocation } from "react-router-dom";

export function useBreadcrumbItems() {
  const location = useLocation();

  const segments = location.pathname
    .split("/")
    .filter((seg) => seg !== "");

  const items = segments.map((segment, index) => {
    const to = "/" + segments.slice(0, index + 1).join("/");

    const name = decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return {
      name,
      to,
      isLast: index === segments.length - 1,
    };
  });

  return [
    { name: "Home", to: "/", isLast: segments.length === 0 },
    ...items,
  ];
}

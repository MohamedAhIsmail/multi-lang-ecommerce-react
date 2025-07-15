import { useTranslation } from "react-i18next";
import { HiMagnifyingGlass } from "react-icons/hi2";

function SearchCategories() {
  const { t } = useTranslation();
  return (
    <div className="text-gray-500 flex items-center gap-2 border-2 p-3 rounded-md w-full sm:w-auto">
      <HiMagnifyingGlass className="text-xl" />
      <input
        type="text"
        placeholder={t("searchCategories")}
        className="outline-0"
      />
    </div>
  );
}

export default SearchCategories;

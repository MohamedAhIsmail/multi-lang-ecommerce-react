import useCategoriesStore from "@/store/categoriesStore";
import { useTranslation } from "react-i18next";
import { HiMagnifyingGlass } from "react-icons/hi2";

function SearchCategories() {
  const { t } = useTranslation();
  const { searchTerm, setSearchTerm } = useCategoriesStore();

  return (
    <div className="text-gray-500 flex items-center gap-2 border-1 p-2 rounded-md w-full sm:w-auto dark:text-white  dark:bg-[#22272d]">
      <HiMagnifyingGlass className="text-xl" />
      <input
        type="text"
        placeholder={t("searchCategories")}
        className="outline-0 placeholder:dark:text-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchCategories;

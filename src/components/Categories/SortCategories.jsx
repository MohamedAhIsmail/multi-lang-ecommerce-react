import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCategoriesStore from "@/store/categoriesStore";
import { useTranslation } from "react-i18next";

function SortCategories() {
  const { sortType, setSortType } = useCategoriesStore();
  const { t } = useTranslation();

  const sortOptions = [
    {
      name: "categoriesSort.a-z",
      val: "a-z",
    },
    {
      name: "categoriesSort.z-a",
      val: "z-a",
    },
    {
      name: "categoriesSort.high-low",
      val: "high-low",
    },
    {
      name: "categoriesSort.low-high",
      val: "low-high",
    },
  ];

  return (
    <div className="w-full sm:w-auto">
      <Select value={sortType} onValueChange={(val) => setSortType(val)}>
        <SelectTrigger className="w-full sm:w-fit cursor-pointer">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent className="dark:bg-background-main">
          {sortOptions.map((opt) => (
            <SelectItem className="cursor-pointer" value={opt.val}>
              {t(opt.name)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SortCategories;

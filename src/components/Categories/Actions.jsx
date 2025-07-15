import SearchCategories from "./SearchCategories";
import SortCategories from "./SortCategories";

function Actions() {
  return (
    <div className="my-10 flex gap-4 flex-col sm:flex-row justify-between items-center shadow-sm border-1 rounded-lg p-4 dark:shadow-xl">
      <SearchCategories />
      <SortCategories />
    </div>
  );
}

export default Actions;

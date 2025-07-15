import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SortCategories() {
  return (
    <div className="w-full sm:w-auto">
      <Select onValueChange="">
        <SelectTrigger className="w-full sm:w-[130px] cursor-pointer">
          <SelectValue placeholder="Sort By">Sort By</SelectValue>
        </SelectTrigger>
        <SelectContent className="dark:bg-background-main">
          <SelectItem className="cursor-pointer">Item Count</SelectItem>
          <SelectItem className="cursor-pointer">Name</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SortCategories;

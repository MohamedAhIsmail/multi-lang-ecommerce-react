import { Skeleton } from "../ui/skeleton";

function ProductCardSkeleton() {
  return (
    <div className="p-4 border rounded-sm">
      <Skeleton className="h-50 w-full mb-5" />
      <Skeleton className="h-5 w-[50%]" />
      <Skeleton className="mt-4 h-5 w-[90%]"/>
      <div className="flex justify-between  items-center mt-4">
        <Skeleton className="w-[40%] h-5" />
        <Skeleton className="w-10 h-10" />
      </div>
    </div>
  );
}

export default ProductCardSkeleton;

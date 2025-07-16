import { Skeleton } from "../ui/skeleton";

function SmallCardSkeleton() {
  return (
    <div className="flex gap-4 items-center">
      <Skeleton className="w-24 h-24" />
      <div className="flex flex-col gap-2">
        <Skeleton className="w-14 h-5" />
        <Skeleton className="w-50 h-5 " />
        <Skeleton className="w-20 h-5" />
      </div>
    </div>
  );
}

export default SmallCardSkeleton;

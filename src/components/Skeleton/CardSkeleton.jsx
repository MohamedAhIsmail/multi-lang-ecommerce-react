import { Skeleton } from "../ui/skeleton";

function CardSkeleton() {
  return (
    <div className="flex gap-5 flex-col items-center justify-center p-4 rounded">
      <Skeleton className="w-15 h-15" />
      <Skeleton className="w-full h-5" />
    </div>
  );
}

export default CardSkeleton;

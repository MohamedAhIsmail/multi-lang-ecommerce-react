import { Skeleton } from "../ui/skeleton";

function CardSkeleton() {
  return (
    <div>
      <Skeleton className="w-12 h-12" />
      <Skeleton className="w-5 h-5 rounded-full" />
      <Skeleton />
    </div>
  );
}

export default CardSkeleton;

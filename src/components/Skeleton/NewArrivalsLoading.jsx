import SmallCardSkeleton from "./SmallCardSkeleton";

function NewArrivalsLoading() {
  return (
    <div className="grid gap-8 grid-col-1 sm:grid-cols-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <SmallCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default NewArrivalsLoading;

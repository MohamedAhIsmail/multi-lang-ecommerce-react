import CardSkeleton from "./CardSkeleton";

function CatsLoading() {
  return (
    <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {"abcdefghi".split("").map((i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export default CatsLoading;

import CardSkeleton from "./CardSkeleton";

function CatsLoading() {
  return (
    <div className="container grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {"abcdefghij".split("").map((i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export default CatsLoading;

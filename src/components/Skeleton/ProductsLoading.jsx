import ProductCardSkeleton from "./ProductCardSkeleton";

function ProductsLoading() {
  return (
    <div className="container mt-8 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: 10 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default ProductsLoading;

import { useProducts } from "@/hooks/useProducts";
import ProductCard from "../ProductCard";
import ProductsLoading from "../Skeleton/ProductsLoading";
import { useSearchParams } from "react-router-dom";
import NoResultsMessage from "../NoResultsMessage";

function ProductsGrid() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const { products, isLoading } = useProducts();

  if (isLoading) return <ProductsLoading />;

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredProducts.length === 0) return <NoResultsMessage />;

  return (
    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {filteredProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsGrid;

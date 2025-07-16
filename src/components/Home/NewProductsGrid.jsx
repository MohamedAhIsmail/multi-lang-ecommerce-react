import { useProducts } from "@/hooks/useProducts";
import SmallProductCard from "./SmallProductCard";
import NewArrivalsLoading from "../Skeleton/NewArrivalsLoading";
import CatsLoading from "../Skeleton/CatsLoading";

function NewProductsGrid() {
  const { products, isLoading } = useProducts();

  if (isLoading) return <NewArrivalsLoading />;

  const newProducts = products?.slice(0, 6);

  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
      {newProducts?.map((product) => (
        <SmallProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default NewProductsGrid;

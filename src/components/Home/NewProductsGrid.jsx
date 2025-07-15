import { useProducts } from "@/hooks/useProducts";
import SmallProductCard from "./SmallProductCard";

function NewProductsGrid() {
  const { products, isLoading } = useProducts();

  console.log(products);
  if (isLoading) return <p>Loading prod</p>;

  const newProducts = products.slice(0, 6);

  return (
    <div className="grid gap-8 grid-col-1 sm:grid-cols-2">
      {newProducts.map((product) => (
        <SmallProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default NewProductsGrid;

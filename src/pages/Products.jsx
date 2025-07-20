import BreadcrumbDynamic from "@/components/BreadcrumbDynamic";
import ProductsActions from "@/components/Products/ProductsActions";
import ProductsGrid from "@/components/Products/ProductsGrid";

function Products() {
  return (
    <section>
      <div className="container">
        <BreadcrumbDynamic />
        <ProductsActions />
        <ProductsGrid />
      </div>
    </section>
  );
}

export default Products;

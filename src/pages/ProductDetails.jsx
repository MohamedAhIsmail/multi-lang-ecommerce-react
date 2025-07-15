import BreadcrumbDynamic from "@/components/BreadcrumbDynamic";
import { useProductBySlug } from "@/hooks/useProductBySlug";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { slug } = useParams();
  const { product, isLoading } = useProductBySlug(slug);

  if (isLoading) <p>Loading</p>;

  console.log(product);

  return (
    <section>
      <div className="container">
        <BreadcrumbDynamic customLastName={product?.title} />
      </div>
    </section>
  );
}

export default ProductDetails;

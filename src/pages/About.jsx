import Card from "@/components/Card";
import { useLanguage } from "@/hooks/useLanguage";
// import { getSingleCategory } from "@/services/apiCategories";
import { getProducts } from "@/services/apiProducts";
import { useEffect, useState } from "react";

function About() {
  const { language } = useLanguage();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(language).then((data) => {
      setProducts(data);
    });
  }, [language]);

  return (
    <div className="flex gap-5">
      {products.map((product) => (
        <Card key={product.documentId} product={product}/>
      ))}
    </div>
  );
}

export default About;

import { HiShoppingBag } from "react-icons/hi2";

function CategoryCard({ category }) {
  return (
    <div>
      <HiShoppingBag />

      <div>
        <h3>{category.name}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;

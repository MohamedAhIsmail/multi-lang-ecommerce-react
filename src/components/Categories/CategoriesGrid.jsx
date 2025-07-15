import CategoryCard from "./CategoryCard";

function CategoriesGrid({ categories }) {
  return (
    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {categories.map((cat) => (
        <CategoryCard category={cat} />
      ))}
    </div>
  );
}

export default CategoriesGrid;

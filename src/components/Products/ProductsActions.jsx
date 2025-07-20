import SortProducts from "./SortProducts";

function ProductsActions() {
  return (
    <div className="my-10 flex gap-4 flex-col sm:flex-row justify-between items-center shadow-sm border-1 rounded-lg p-4 dark:shadow-xl">
      <SortProducts/>
    </div>
  );
}

export default ProductsActions;

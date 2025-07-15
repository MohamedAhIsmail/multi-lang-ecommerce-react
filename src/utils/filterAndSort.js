export function filterAndSort(array, searchTerm, sortType) {
  let result = [...array];

  // search filter
  if (searchTerm) {
    result = result.filter((cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // sort by
  switch (sortType) {
    case "a-z":
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "z-a":
      result.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "high-low":
      result.sort((a, b) => b.products.length - a.products.length);
      break;
    case "low-high":
      result.sort((a, b) => a.products.length - b.products.length);
      break;
    default:
      break;
  }

  return result;
}

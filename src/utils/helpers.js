export function formatPrice(value, currency = "EGP") {
  if (typeof value !== "number") return value;

  return value.toLocaleString("en-EG", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  });
}

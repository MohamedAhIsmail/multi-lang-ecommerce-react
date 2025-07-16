import { BASE_URL } from "@/utils/constants";
import { formatPrice } from "@/utils/helpers";
import { StarRating } from "@/components/rating";
import { Link } from "react-router-dom";

function SmallProductCard({ product }) {
  const { title, image, price, rating, slug } = product;
  const fullImageUrl = BASE_URL + image[0].url;

  return (
    <Link to={`/products/${slug}`} className="flex gap-4 items-center group">
      <img src={fullImageUrl} alt={title} className="w-24" />
      <div className="flex flex-col gap-2">
        <StarRating rating={rating} size={16} color="#FC9231" />
        <h2 className="group-hover:underline transition-all duration-500">
          {title}
        </h2>
        <p>{formatPrice(price)}</p>
      </div>
    </Link>
  );
}

export default SmallProductCard;

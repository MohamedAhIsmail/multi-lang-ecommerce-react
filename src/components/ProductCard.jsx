import { BASE_URL } from "@/utils/constants";
import { StarRating } from "./rating";
import { formatPrice } from "@/utils/helpers";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { title, image, price, rating, slug } = product;
  const fullImageUrl = BASE_URL + image[0].url;

  return (
    <Link to={`/products/${slug}`} className="p-4 group">
      <div className="mb-5 flex items-center justify-center">
        <img src={fullImageUrl} alt={title} />
      </div>
      <StarRating rating={rating} color="#FC9231" />

      <h3 className="line-clamp-2 min-h-[48px] mt-4">{title}</h3>

      <div className=" mt-2 flex items-center justify-between">
        <span>{formatPrice(price)}</span>
        <div className="bg-background-second text-xl p-2 rounded-sm group-hover:bg-button-main group-hover:text-white transition-all duration-300">
          <LuShoppingCart />
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;

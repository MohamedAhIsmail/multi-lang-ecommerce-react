import { BASE_URL } from "@/utils/constants";

function Card({ product }) {
  const { title, image, price, description, rating } = product;

  const fullImageUrl = BASE_URL + image[0].url;

  return (
    <div>
      <img src={fullImageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <p>{rating}</p>
    </div>
  );
}

export default Card;

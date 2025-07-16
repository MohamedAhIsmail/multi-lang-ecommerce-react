import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

export function StarRating({ rating, max = 5, size = 16, color = "#facc15" }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<IoIosStar key={`full-${i}`} size={size} color={color} />);
  }

  if (hasHalfStar) {
    stars.push(<IoIosStarHalf key="half" size={size} color={color} />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <IoIosStarOutline key={`empty-${i}`} size={size} color={color} />
    );
  }

  return <div className="flex gap-1">{stars}</div>;
}

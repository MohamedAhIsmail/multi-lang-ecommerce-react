import {
  HiShoppingBag,
  HiOutlineCamera,
  HiDeviceTablet,
  HiDevicePhoneMobile,
} from "react-icons/hi2";
import { BsSmartwatch, BsEarbuds } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";

import { Link } from "react-router-dom";

const getCategoryIcon = (name) => {
  const iconsMap = {
    cameras: HiOutlineCamera,
    "ipads-and-tablets": HiDeviceTablet,
    "smart-watches": BsSmartwatch,
    smartphones: HiDevicePhoneMobile,
    headphones: FaHeadphones,
    earbuds: BsEarbuds,
  };

  const Icon = iconsMap[name.toLowerCase()] || HiShoppingBag;
  return <Icon className="text-5xl text-button-main" />;
};

function CategoryCard({ category }) {
  return (
    <Link
      to={`/categories/${category.slug}`}
      className="flex items-center justify-center bg-background-main p-4 rounded shadow hover:shadow-md text-heading border-1 transition-shadow duration-150"
    >
      <div className="flex flex-col gap-5 items-center">
        {getCategoryIcon(category.slug)}
        <h3 className="text-lg text-center">{category.name}</h3>
      </div>
    </Link>
  );
}

export default CategoryCard;

import { HiChevronRight } from "react-icons/hi2";
import iphone from "../../assets/iphone.webp";
import Button from "../Button";

function IphoneSlide() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center p-5">
      <div className="text-heading flex justify-center">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-4xl font-light mb-4">Check our huge</p>
          <h2 className="text-5xl">Smartphones</h2>
          <p className="text-xl font-light mt-2 mb-5">
            & Accessories collection
          </p>
          <Button>
            Shop Now <HiChevronRight />
          </Button>
        </div>
      </div>

      <div>
        <img src={iphone} alt="Iphone" />
      </div>
    </div>
  );
}

export default IphoneSlide;

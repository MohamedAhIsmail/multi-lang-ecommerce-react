import { HiChevronRight } from "react-icons/hi2";
import headphone from "../../assets/head.webp";
import Button from "../Button";

function HeadphoneSlide() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center p-5">
      <div className="text-heading flex justify-center">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-4xl font-light mb-4">World of sounds with</p>
          <h2 className="text-5xl">Headphones</h2>
          <p className="text-xl font-light mt-2 mb-5">
            Choose between top brands
          </p>
          <Button>
            Shop Now <HiChevronRight />
          </Button>
        </div>
      </div>

      <div>
        <img src={headphone} alt="HeadpPhone" />
      </div>
    </div>
  );
}

export default HeadphoneSlide;

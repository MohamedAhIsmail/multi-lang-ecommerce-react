import { HiChevronRight } from "react-icons/hi2";
import ipad from "../../assets/ipad.webp";
import Button from "../Button";

function IpadSlide() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center p-5">
      <div className="text-heading flex justify-center">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-4xl font-light mb-4">Explore the best</p>
          <h2 className="text-5xl">Ipad Collection</h2>
          <p className="text-xl font-light mt-2 mb-5">on the market</p>
          <Button>
            Shop Now <HiChevronRight />
          </Button>
        </div>
      </div>

      <div>
        <img src={ipad} alt="Ipad" className="w-[80%]" />
      </div>
    </div>
  );
}

export default IpadSlide;

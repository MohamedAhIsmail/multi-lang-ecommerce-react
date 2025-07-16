import Banners from "./Banners";
import Slider from "./Slider";

function Hero() {
  return (
    <section className="py-8">
      <div className="container flex flex-col xl:flex-row xl:justify-between xl:items-center gap-5 xl:gap-0">
        <div className="order-last xl:order-first w-full h-auto xl:w-[23%]">
          <Banners />
        </div>

        <div className="order-first xl:order-last w-full xl:w-[75%] bg-background-second dark:bg-[#1F2833] rounded-lg">
          <Slider />
        </div>
      </div>
    </section>
  );
}

export default Hero;

import Banners from "./Banners";
import Slider from "./Slider";

function Hero() {
  return (
    <section className="bg-background-second py-15">
      <div className="container flex flex-col xl:flex-row xl:justify-between xl:items-center gap-5 xl:gap-0">
        <div className="order-last xl:order-first w-full h-auto xl:h-[500px] xl:w-[23%]">
          <Banners />
        </div>

        <div className="order-first xl:order-last w-full xl:w-[75%]">
          <Slider />
        </div>
      </div>
    </section>
  );
}

export default Hero;

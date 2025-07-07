import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import IphoneSlide from "./IphoneSlide";
import HeadphoneSlide from "./HeadphoneSlide";
import IpadSlide from "./IpadSlide";

function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <IphoneSlide />
      </SwiperSlide>
      <SwiperSlide>
        <HeadphoneSlide />
      </SwiperSlide>
      <SwiperSlide>
        <IpadSlide />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;

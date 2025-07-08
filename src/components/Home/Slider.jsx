import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import IphoneSlide from "./IphoneSlide";
import HeadphoneSlide from "./HeadphoneSlide";
import IpadSlide from "./IpadSlide";

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={true}
      navigation={true}
      pagination={{ clickable: true }}
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

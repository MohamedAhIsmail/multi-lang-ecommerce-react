import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

import IphoneSlide from "./IphoneSlide";
import HeadphoneSlide from "./HeadphoneSlide";
import IpadSlide from "./IpadSlide";
import { useLanguage } from "../../hooks/useLanguage";

const slides = [<IphoneSlide />, <HeadphoneSlide />, <IpadSlide />];

function Slider() {
  const { language } = useLanguage();

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      key={language}
      dir={language === "en" ? `ltr` : `rtl`}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      // }}
      // navigation={true}
      pagination={{ clickable: true }}
      grabCursor
      speed={1000}
      // centeredSlides
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";





function Carousel() {
  const slides = [
    
    "https://acdn-us.mitiendanube.com/stores/001/929/213/themes/atlantico/2-slide-1734049808011-3571780959-ac8720bc9fe5a2c6e971c0536ef96b651734049810-1920-1920.webp?272675730",
    "https://acdn-us.mitiendanube.com/stores/001/929/213/themes/atlantico/2-slide-1754533281143-4585469859-dd539d1e7091d09993fce5314362fc3c1754533282-1920-1920.webp?272675730f",
    "https://acdn-us.mitiendanube.com/stores/001/929/213/themes/atlantico/2-slide-1751891169758-1429495246-4762c24554600e6c79fe1799275a70c61751891171-1920-1920.webp?272675730",
    "https://acdn-us.mitiendanube.com/stores/001/929/213/themes/atlantico/2-slide-1712616169893-6252629439-a7a084668f28e14d5612167ea896d9631712616165-1920-1920.webp?272675730"
  ];

  return (
    <div className=" w-[174vh] pt-0.5">
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        loop={true}
        direction="horizontal"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              
              src={src}
              alt={`Slide ${index}`}
              className="w-[174vh] h-[75vh] object-cover  "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Carousel
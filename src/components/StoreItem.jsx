import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";



function StoreMouse() {
  const slides = [
    
    "https://acdn-us.mitiendanube.com/stores/001/929/213/products/screenshot-2025-08-10-at-19-25-10-endgame-gear-op1-8k-v2-wireless-gaming-mouse-white-us-maxgaming-com-fd25bc2501a0fce27817549590312315-480-0.webp",
    "https://acdn-us.mitiendanube.com/stores/001/929/213/products/screenshot-2025-08-10-at-19-25-10-endgame-gear-op1-8k-v2-wireless-gaming-mouse-white-us-maxgaming-com-fd25bc2501a0fce27817549590312315-480-0.webp",
    "https://acdn-us.mitiendanube.com/stores/001/929/213/products/screenshot-2025-08-10-at-19-25-10-endgame-gear-op1-8k-v2-wireless-gaming-mouse-white-us-maxgaming-com-fd25bc2501a0fce27817549590312315-480-0.webp",
    "https://acdn-us.mitiendanube.com/stores/001/929/213/products/screenshot-2025-08-10-at-19-25-10-endgame-gear-op1-8k-v2-wireless-gaming-mouse-white-us-maxgaming-com-fd25bc2501a0fce27817549590312315-480-0.webp",
    "https://acdn-us.mitiendanube.com/stores/001/929/213/products/screenshot-2025-08-10-at-19-25-10-endgame-gear-op1-8k-v2-wireless-gaming-mouse-white-us-maxgaming-com-fd25bc2501a0fce27817549590312315-480-0.webp",
  ];
  return (
    <div className=" ml-60 p-10 ">
        <h3 className="font-bold text-white h-10 text-4xl ">Destaques</h3>
      <Swiper
        spaceBetween={18}
        slidesPerView={4}
        loop={true}
        direction="horizontal"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white h-[50vh] rounded-lg shadow-lg mt-5 overflow-hidden flex justify-center items-center flex-col">
                <img
                
                src={src}
                alt={`Slide ${index}`}
                className="w-[10vh] h-[30vh] object-cover flex "
                />
                <div className="p-4 text-center">
                    <h4 className="text-black text-lg font-semibold mt-2 ">ATK SHARK {}</h4>
                    <p className="text-gray-600">Descrição do mouse {}.</p>
                    <button className="mt-2 bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition duration-200">
                        Comprar
                    </button>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default StoreMouse
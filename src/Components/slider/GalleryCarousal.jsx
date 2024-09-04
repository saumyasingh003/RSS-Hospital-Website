import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectFade,
} from "swiper/modules";
import gallery1 from "../../assets/gallery1.jpeg";
import gallery2 from "../../assets/gallery2.jpeg";
import gallery3 from "../../assets/gallery3.jpeg";
import gallery4 from "../../assets/gallery4.jpeg";
import gallery5 from "../../assets/gallery5.jpeg";
import gallery6 from "../../assets/gallery6.jpeg";
import gallery7 from "../../assets/gallery7.jpeg";
import gallery8 from "../../assets/gallery8.jpeg";
import gallery9 from "../../assets/gallery9.jpeg";
import gallery10 from "../../assets/gallery10.jpeg";
import gallery11 from "../../assets/gallery11.jpeg";
import gallery12 from "../../assets/gallery12.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Carousel() {
  return (
    <div className="lg:mx-5" > 
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
        // slidesPerView={3}
        autoplay={{
          delay: 2500,
        }}

        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
        effect="coverflow"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="p-8"
      >
        <SwiperSlide>
          <img
            src={gallery1}
            alt="image"
            className="md:h-auto h-[25vh]  w-full max-w-[500px] rounded-[5px] shadow-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={gallery2}
            alt="image"
            className="md:h-auto h-[25vh]  w-full max-w-[400px] rounded-[5px] shadow-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={gallery3}
            alt="image"
            className="md:h-auto h-[25vh]  w-full max-w-[400px] rounded-[5px] shadow-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={gallery4}
            alt="image"
            className="md:h-auto h-[25vh]  w-full max-w-[400px] rounded-[5px] shadow-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={gallery5}
            alt="image"
            className="md:h-auto h-[25vh]  w-full max-w-[400px] rounded-[5px] shadow-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={gallery6}
            alt="image"
            className="md:h-auto h-[25vh]  w-full max-w-[400px] rounded-[5px] shadow-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={gallery7}
            alt="image"
            className="md:h-auto h-[25vh]  w-full max-w-[400px] rounded-[5px] shadow-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={gallery8}
            alt="image"
            className="md:h-auto h-[25vh]  w-full max-w-[400px] rounded-[5px] shadow-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={gallery9}
            alt="image"
            className="md:h-auto h-[25vh]  w-full max-w-[400px] rounded-[5px] shadow-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={gallery10}
            alt="image"
            className="md:h-auto h-[25vh]  w-full max-w-[400px] rounded-[5px] shadow-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={gallery11}
            alt="image"
            className="md:h-auto h-[25vh]  w-full max-w-[400px] rounded-[5px] shadow-lg object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={gallery12}
            alt="image"
            className="md:h-auto h-[25vh]  w-full max-w-[400px] rounded-[5px] shadow-lg object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import college_picture2 from "../../assets/college_picture2.jpg"; 
import college_picture from "../../assets/college_picture.jpg";
import college_picture1 from "../../assets/college_picture1.jpg"; 
export default function Carousel() {
  return (
    <div className="lg:mx-5 md:pr-4 mt-5 mx-2" >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        
        slidesPerView={1}
        autoplay={{
          delay: 2500,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
      
        <SwiperSlide>
          <img src={college_picture} alt="image" className="lg:h-[30rem]   h-[38vh] w-screen rounded-xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={college_picture1} alt="image" className="lg:h-[30rem] h-[38vh] w-screen rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={college_picture2}  alt="image" className="lg:h-[30rem] h-[38vh] w-screen rounded-xl"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

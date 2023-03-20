import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

const SingleSlider = ({image}) => {
  return (
    <Swiper
    className="w-2/5"
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    autoplay={{ delay: 3000 }}
    pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
  >
    <SwiperSlide>
      <img
        className="w-full rounded-lg mt-8 mb-16"
        src={image}
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        className="w-full rounded-lg mt-8 mb-16"
        src='https://loremflickr.com/640/641'
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        className="w-full rounded-lg mt-8 mb-16"
        src='https://loremflickr.com/641/640'
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        className="w-full rounded-lg mt-8 mb-16"
        src='https://loremflickr.com/640/642'
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        className="w-full rounded-lg mt-8 mb-16"
        src='https://loremflickr.com/642/640'
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        className="w-full rounded-lg mt-8 mb-16"
        src='https://loremflickr.com/642/641'
        alt=""
      />
    </SwiperSlide>
    {/* <SwiperSlide>
      <img
        className="w-full rounded-lg mt-8 mb-16"
        src="https://images.uzum.uz/cg5ftsvhj8j9g699ho4g/main_page_banner.jpg"
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        className="w-full rounded-lg mt-8 mb-16"
        src="	https://images.uzum.uz/cg4mamfg49devoaa323g/main_page_banner.jpg"
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        className="w-full rounded-lg mt-8 mb-16"
        src="https://images.uzum.uz/cg4mbqfhj8j9g699dmjg/main_page_banner.jpg"
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        className="w-full rounded-lg mt-8 mb-16"
        src="	https://images.uzum.uz/cg4mamfg49devoaa323g/main_page_banner.jpg"
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        className="w-full rounded-lg mt-8 mb-16"
        src="https://images.uzum.uz/cg4md8ng49devoaa32f0/main_page_banner.jpg"
        alt=""
      />
    </SwiperSlide>{" "}
    <SwiperSlide>
      <img
        className="w-full rounded-lg mt-8 mb-16"
        src="	https://images.uzum.uz/cfv22a7hgiov1qid9m1g/main_page_banner.jpg"
        alt=""
      />
    </SwiperSlide> */}
  </Swiper>
  );
};

export default SingleSlider;

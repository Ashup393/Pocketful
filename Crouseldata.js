import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "./Crousel.css";

import img1 from "../Images/const1.png";
import img2 from "../Images/download (1).jpg";
import img3 from "../Images/download (2).jpg";
import img4 from "../Images/download.jpg";
import img5 from "../Images/images (1).jpg";
import img6 from "../Images/images.jpg";

export default function Crouseldata() {
  return (
    <div className="container">
      {/* <h1 className='heading'> gh</h1> */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
      >
        <SwiperSlide>
          <img style={{ marginLeft: "23%" }} src={img1} alt="img"></img>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ marginLeft: "23%" }} src={img2} alt="img"></img>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ marginLeft: "23%" }} src={img3} alt="img"></img>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ marginLeft: "23%" }} src={img4} alt="img"></img>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ marginLeft: "23%" }} src={img5} alt="img"></img>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ marginLeft: "23%" }} src={img6} alt="img"></img>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slidder-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slidder-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

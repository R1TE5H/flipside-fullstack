import React from "react";
import projects from "../../services/GetProjects";
import "../../main.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./swiperCard.css";

// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import useWindowDimensions from "../../services/UseWindowDimensions";
import { Link } from "react-router-dom";

const SwiperCard = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        loop={true}
        navigation={width > 960 ? true : false}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
        style={{
          borderRadius: "20px",
          height: "500px",
        }}
      >
        <SwiperSlide>
          <p>Hello World</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Hello dWorld</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Hello World</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperCard;

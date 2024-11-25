import React from "react";
import projects from "../../services/GetProjects";
import "../../main.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./landingProjectsSwiper.css";
import styles from "./landingProjects.module.css";

// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import useWindowDimensions from "../../services/UseWindowDimensions";
import { Link } from "react-router-dom";

const LandingProjects = () => {
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
        navigation={width > 1100 ? true : false}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
        style={{
          borderRadius: "20px",
          height: "500px",
        }}
      >
        {projects.map((e, index) => (
          <SwiperSlide key={index}>
            <Link
              to="/user/sign-up"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={["columns", styles.project].join(" ")}>
                <img
                  src={e.image}
                  alt={e.state}
                  style={{
                    width: "300px",
                    height: "300px",
                  }}
                />
                <div className="columns" style={{ padding: "0 20px 20px" }}>
                  {" "}
                  <span
                    className="xs-txt"
                    style={{ margin: "10px 0", textAlign: "left" }}
                  >
                    {e.city}, {e.state}
                  </span>
                  <div
                    className="rows sm-txt semi-bold"
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="columns">
                      <span
                        className="xs-txt"
                        style={{ color: `var(--primary)` }}
                      >
                        Purchase Price
                      </span>{" "}
                      <span>{e.buy}</span>
                    </div>
                    <div className="columns">
                      <span
                        className="xs-txt"
                        style={{ textAlign: "right", color: `var(--primary)` }}
                      >
                        Target Sell Price
                      </span>{" "}
                      <span style={{ textAlign: "right" }}>{e.sell}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LandingProjects;

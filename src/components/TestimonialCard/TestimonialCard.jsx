import "./TestimonialCard.css";

import user from "../../assets/user.png";

import testimonialsContent from "../../constants/testimonialsContent";
import { Rating } from "@mui/material";

import leftArrowBlack from "../../assets/leftArrowBlack.png";
import rightArrowWhite from "../../assets/rightArrowWhite.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

const TestimonialCard = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  return (
    <>
      <div className="testimonials__media">
        <p className="testimonials__media-title">
          Testimonial from Ben Coffee Member
        </p>
        <div className="testimonials__media-buttons">
          <button className="swiper-button-prev" onClick={goPrev}>
            <img src={leftArrowBlack} alt="" />
          </button>
          <button className="swiper-button-next" onClick={goNext}>
            <img src={rightArrowWhite} alt="" />
          </button>
        </div>
      </div>
      <div className="testimonial">
        <Swiper
          onSwiper={setSwiper}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          spaceBetween={31}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 48,
            },
          }}
        >
          {testimonialsContent.map((item) => (
            <SwiperSlide key={item.id} className="testimonial__card">
              <div className="testimonial__card-container">
                <p className="testimonial__card-container-title">
                  {item.title}
                </p>
                <p className="testimonial__card-container-subtitle">
                  {item.subtitle}
                </p>
                <p className="testimonial__card-container-owner">
                  {item.owner}
                </p>
              </div>
              <div className="testimonial__card-user">
                <img src={user} alt="" />
                <div className="testimonial__card-user-container">
                  <p className="testimonial__card-user-container-name">
                    {item.name}
                  </p>
                  <Rating
                    name="simple-controlled"
                    value={item.rating}
                    style={{ color: "black" }}
                    className="testimonial__card-user-rating"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TestimonialCard;

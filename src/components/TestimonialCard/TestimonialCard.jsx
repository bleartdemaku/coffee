import "./TestimonialCard.css";

import user from "../../assets/user.png";

import testimonialsContent from "../../constants/testimonialsContent";
import { Rating } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialCard = () => {
  return (
    <div className="testimonial">
      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={31}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
        }}
        // modules={[Pagination]}
      >
        {testimonialsContent.map((item) => (
          <SwiperSlide key={item.id} className="testimonial__card">
            <div className="testimonial__card-container">
              <p className="testimonial__card-container-title">{item.title}</p>
              <p className="testimonial__card-container-subtitle">
                {item.subtitle}
              </p>
              <p className="testimonial__card-container-owner">{item.owner}</p>
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
  );
};

export default TestimonialCard;

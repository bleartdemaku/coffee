import "./MenuCard.css";

import whiteCart from "../../assets/whiteCart.png";

import menuContent from "../../constants/menuContent";
import { Rating } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MenuCard = () => {
  return (
    <>
      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {menuContent.map((item) => (
          <SwiperSlide key={item.id} className="menu__card">
            <div className="menu__card-img">
              <img src={item.image} alt="" />
            </div>
            {/* <div className="menu__card-container"> */}
            <div className="menu__card-title">{item.title}</div>
            <div className="menu__card-rating">
              <Rating
                name="simple-controlled"
                value={item.star}
                style={{ color: "black" }}
              />
              <p>{item.price}</p>
            </div>
            <div className="menu__card-subtitle">{item.subtitle}</div>
            {/* <div className="menu__card-button"> */}
            <button>
              <img src={whiteCart} alt="" />
              ADD TO CART
            </button>
            {/* </div> */}
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MenuCard;

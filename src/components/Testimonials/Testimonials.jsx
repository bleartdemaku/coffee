import "./Testimonials.css";

import leftArrowBlack from "../../assets/leftArrowBlack.png";
import rightArrowWhite from "../../assets/rightArrowWhite.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__media">
        <p className="testimonials__media-title">
          Testimonial from Ben Coffee Member
        </p>
        <div className="testimonials__media-buttons">
          <button>
            <img src={leftArrowBlack} alt="" />
          </button>
          <button>
            <img src={rightArrowWhite} alt="" />
          </button>
        </div>
      </div>
      <TestimonialCard />
    </div>
  );
};

export default Testimonials;

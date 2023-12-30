import "./Slideshow.css";

import slideShow from "../../constants/slideShow";

import { useState } from "react";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  //   const nextSlide = () => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % slideShow.length);
  //   };

  //   const prevSlide = () => {
  //     setCurrentSlide(
  //       (prevSlide) => (prevSlide - 1 + slideShow.length) % slideShow.length
  //     );
  //   };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className="slideshow-container">
      <div className="slides">
        {slideShow.map((slide, index) => (
          <img
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            src={slide.image}
            alt=""
          />
        ))}
      </div>
      <div className="indicators">
        {slideShow.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

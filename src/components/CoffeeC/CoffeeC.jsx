import "./CoffeeC.css";

import Slideshow from "../Slideshow/Slideshow";

const CoffeeC = () => {
  return (
    <div className="coffee bg-brown-gradient">
      <p className="coffee__title">
        Start Your Search With Specific <br />
        Coffee Characteristics
      </p>

      <div className="coffee__container">
        <div className="coffee__container-first">
          <div className="coffee__container-first-box">
            <p className="coffee__container-first-box-title">Light</p>
            <p className="coffee__container-first-box-subtitle">
              Lorem ipsum dolor sit amet, conse ctetur <br /> adipiscing elit ut
              aliquam, purus sit amet <br /> ipsum dolor amet, conse ctetur
              adipiscing <br /> elit ut aliquam, purus sit amet
            </p>
          </div>
          <div className="coffee__container-first-box">
            <p className="coffee__container-first-box-title">Blend</p>
            <p className="coffee__container-first-box-subtitle">
              Lorem ipsum dolor sit amet, conse ctetur <br /> adipiscing elit ut
              aliquam, purus sit amet <br /> ipsum dolor amet, conse ctetur
              adipiscing <br /> elit ut aliquam, purus sit amet
            </p>
          </div>
          <div className="coffee__container-first-box">
            <p className="coffee__container-first-box-title">Dark</p>
            <p className="coffee__container-first-box-subtitle">
              Lorem ipsum dolor sit amet, conse ctetur <br /> adipiscing elit ut
              aliquam, purus sit amet <br /> ipsum dolor amet, conse ctetur
              adipiscing <br /> elit ut aliquam, purus sit amet
            </p>
          </div>
        </div>

        {/* Slideshow here! */}
        <Slideshow />

        <div className="coffee__container-second">
          <div className="coffee__container-second-box">
            <p className="coffee__container-second-box-title">Fruity</p>
            <p className="coffee__container-second-box-subtitle">
              Lorem ipsum dolor sit amet, conse ctetur <br /> adipiscing elit ut
              aliquam, purus sit amet <br /> ipsum dolor amet, conse ctetur
              adipiscing <br /> elit ut aliquam, purus sit amet
            </p>
          </div>
          <div className="coffee__container-second-box">
            <p className="coffee__container-second-box-title">Single Origin</p>
            <p className="coffee__container-second-box-subtitle">
              Lorem ipsum dolor sit amet, conse ctetur <br /> adipiscing elit ut
              aliquam, purus sit amet <br /> ipsum dolor amet, conse ctetur
              adipiscing <br /> elit ut aliquam, purus sit amet
            </p>
          </div>
          <div className="coffee__container-second-box">
            <p className="coffee__container-second-box-title">Medium</p>
            <p className="coffee__container-second-box-subtitle">
              Lorem ipsum dolor sit amet, conse ctetur <br /> adipiscing elit ut
              aliquam, purus sit amet <br /> ipsum dolor amet, conse ctetur
              adipiscing <br /> elit ut aliquam, purus sit amet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeC;

import "./Quality.css";

import arrow from "../../assets/arrow.png";
import square from "../../assets/square.png";

const Quality = () => {
  return (
    <div className="quality">
      <div className="quality__media">
        <p className="quality__media-title">
          Quality Coffee <br /> Cultivated by Good
        </p>
        <p className="quality__media-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet <br /> luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim <br /> dolor sit amet,
          consectetur adipiscing elit aliquam purus sit amet luctus venenatis
        </p>
        <div className="quality__media-button">
          <button>
            SHOP NOW <img src={arrow} alt="right arrow" />
          </button>
        </div>
      </div>
      <div className="quality__photo">
        <img src={square} alt="" />
      </div>
    </div>
  );
};

export default Quality;

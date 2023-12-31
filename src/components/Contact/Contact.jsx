import "./Contact.css";

import coffee3 from "../../assets/coffee3.jpg";
import arrow from "../../assets/arrow.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__image">
        <img src={coffee3} alt="" />
      </div>
      <div className="contact__media">
        <p className="contact__media-title">
          Become Our Dealer and Distributor
        </p>
        <p className="contact__media-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit <br /> amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus <br /> non enim dolor sit amet,
          consectetur adipiscing elit aliquam purus sit amet luctus <br />
          venenatis
        </p>
        <div className="contact__media-button">
          <button>
            Contact Us <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

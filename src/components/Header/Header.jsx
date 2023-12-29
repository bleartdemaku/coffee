import "./Header.css";

import coffee1 from '../../assets/coffee1.jpg';
import coffee2 from '../../assets/coffee2.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container-title">
          We Delivery The <br /> Best Coffee Bean To <br /> Your Home
        </div>
        <div className="header__container-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,{" "}
          <br /> purus sit amet luctus venenatis, lectus magna fringilla urna,{" "}
          <br /> porttitor rhoncus dolor purus non enim
        </div>
        <div className="header__container-button">
          <button>SHOP NOW</button>
        </div>
      </div>

      <div className="header__photos">
        <img className="img1" src={coffee1} alt="person holding coffee" />
        <img className="img2" src={coffee2} alt="coffee on table" />
      </div>
    </div>
  );
};

export default Header;

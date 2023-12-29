import "./Shop.css";

import coffee1 from "../../assets/coffee1.jpg";
import coffee2 from "../../assets/coffee2.jpg";
import signature from "../../assets/signature.png";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop__photos">
        <img src={coffee1} alt="" />
        <img src={coffee2} alt="" />
      </div>
      <div className="shop__container">
        <div className="shop__container-title">
          Your One-Stop Shop for <br /> Premium Coffee Beans and <br />{" "}
          Accessories
        </div>
        <div className="shop__container-subtitle">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet <br /> luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non <br /> enim
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet <br /> luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non <br /> enim
          </p>
        </div>
        <div className="shop__container-name">ALex Ferguso</div>
        <div className="shop__container-ceo">CEO of Ben Coffee</div>
        <img
          src={signature}
          alt="signature"
        />
      </div>
    </div>
  );
};

export default Shop;

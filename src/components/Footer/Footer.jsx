import "./Footer.css";

import logo from "../../assets/logo.png";
import fblogo from "../../assets/fblogo.png";
import iglogo from "../../assets/iglogo.png";
import twlogo from "../../assets/twlogo.png";

const Footer = () => {
  return (
    <div className="footer__end bg-brown-gradient" id="contact">
      <div className="footer">
        <div className="footer__media">
          <div className="footer__media-logo">
            <img src={logo} alt="" />
          </div>
          <p className="footer__media-subtitle">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam <br />{" "}
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi <br />{" "}
            consequatur?
          </p>
          <div className="footer__media-sm">
            <img src={fblogo} alt="" />
            <img src={iglogo} alt="" />
            <img src={twlogo} alt="" />
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__links-container">
            <p className="footer__links-container-title">Company</p>
            <div className="footer__links-container-link">
              <a href="#home">Home</a>
              <a href="#home">About Ben Coffee</a>
              <a href="#home">Pricing</a>
              <a href="#home">Category</a>
              <a href="#home">Product</a>
            </div>
          </div>
          <div className="footer__links-container">
            <p className="footer__links-container-title">Product</p>
            <div className="footer__links-container-link">
              <a href="#home">Arabica</a>
              <a href="#home">Robusta</a>
              <a href="#home">Liberica</a>
              <a href="#home">Etc</a>
            </div>
          </div>
          <div className="footer__links-container">
            <p className="footer__links-container-title">Contact Us</p>
            <div className="footer__links-container-link">
              <a href="#home">+012-324-545-66</a>
              <a href="#home">bencoffee@example.com</a>
            </div>
            <p className="footer__links-container-title">Location</p>
            <div className="footer__links-container-link">
              <a href="#home">St. Grangnam Uhuy, 8329 NYC</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__end-it">
        © 2023 Coffee Beans Shop. All Rights Reserved. With love by Elmous
      </div>
    </div>
  );
};

export default Footer;

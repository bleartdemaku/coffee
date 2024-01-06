import "./Navbar.css";

import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__links">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#shop">SHOP</a>
        <a href="#menu">MENU</a>
        <a href="#contact">CONTACT</a>
      </div>
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__buttons">
        <button>SUBSCRIPTION</button>
        <button>SIGN IN</button>
        <img src={cart} alt="cart logo" />
      </div>

      <div className="navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar__menu_container">
            <div className="navbar__menu_container-links">
              <a href="#home">HOME</a>
              <a href="#about">ABOUT</a>
              <a href="#shop">SHOP</a>
              <a href="#menu">MENU</a>
              <a href="#contact">CONTACT</a>
            </div>
            <div className="navbar__menu_container-links-sign">
              <button>SUBSCRIPTION</button>
              <button>SIGN IN</button>
              <img src={cart} alt="cart logo" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

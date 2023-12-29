import './Navbar.css'

import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'

const Navbar = () => {
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
    </div>
  )
}

export default Navbar

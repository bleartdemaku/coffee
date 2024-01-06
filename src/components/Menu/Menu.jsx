import "./Menu.css";

import MenuCard from "../MenuCard/MenuCard";

const Menu = () => {
  return (
    <div className="menu" id="menu">
      <p className="menu__title">Our Best Coffee</p>
      <div className="menu__container">
        <MenuCard />
      </div>
    </div>
  );
};

export default Menu;

import MenuCard from "../MenuCard/MenuCard";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <p className="menu__title">Our Best Coffee</p>
      <div className="menu__container">
        <MenuCard />
      </div>
    </div>
  );
};

export default Menu;

import { NavLink } from "react-router-dom";
import { TbHomeFilled } from "react-icons/tb";
import { BiSolidCategory } from "react-icons/bi";
import { FaShoppingBag, FaInfoCircle } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/" className="sidebar_btn">
        <TbHomeFilled className="sidebar_icon" />
        Главная
      </NavLink>

      <NavLink to="/categories" className="sidebar_btn">
        <BiSolidCategory className="sidebar_icon" />
        Категории
      </NavLink>

      <NavLink to="/orders" className="sidebar_btn">
        <FaShoppingBag className="sidebar_icon" />
        Заказы
      </NavLink>

      <NavLink to="/about" className="sidebar_btn">
        <FaInfoCircle className="sidebar_icon" />О нас
      </NavLink>
    </div>
  );
}

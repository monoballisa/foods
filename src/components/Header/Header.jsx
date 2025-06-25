import Logo from "../../assets/icons/logo.svg";
import { HiShoppingBag } from "react-icons/hi2";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_wrapper">
          <div className="logo_side">
            <img src={Logo} alt="Logo" />
            <p className="logo_text">Добро пожаловать!</p>
          </div>
          <HiShoppingBag className="card_logo"/>
        </div>
      </div>
    </header>
  );
}

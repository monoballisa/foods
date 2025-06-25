import { Routes, Route } from "react-router-dom";
import Home from "./modules/Home/Home";
import Categories from "./modules/Categories/Categories";
import Orders from "./modules/Orders/Orders";
import About from "./modules/AboutUs/AboutUs";
import Sidebar from "./components/Sidebar/Sidebar";
import Search from "./modules/Search/Search"

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

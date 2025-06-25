import { useState } from "react";
import Restaurant from "../../assets/icons/restaurant.svg";
import FoodsUl from "../../components/FoodsUl/FoodsUl";

export default function Orders() {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <section className="order">
      <div className="container">
        <div className="oreder_wrapper">
          <h3 className="order_title">Ваши заказы</h3>
          <div className="table_wrapper">
            <button>
              <img src={Restaurant} alt="" />
            </button>
            <p className="table">Стол №1</p>
          </div>
          <p className="service_text">За обслужевание 15%</p>
        </div>
        <div className="orders_main">
          <div className="order_imgs">
            <img
              src="https://www.naijaloaded.com.ng/wp-content/uploads/2020/05/ojfh.jpg"
              alt=""
            />
            <div className="texts_column">
              <p className="name_order">Название</p>
              <p className="price_order">200с</p>
            </div>
          </div>
          <div className="coin_counter">
            <button onClick={decrement}>-</button>
            <span>{String(count).padStart(2, "0")}</span>
            <button onClick={increment}>+</button>
          </div>
        </div>
        <button className="total_prise">
          Итого <span>920c</span>
        </button>
        <button className="order_more">Заказать еще</button>
        <p className="add_again">Добавить еще</p>
        <FoodsUl/>
      </div>
    </section>
  );
}

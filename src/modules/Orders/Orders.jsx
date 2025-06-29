import Restaurant from "../../assets/icons/restaurant.svg";
import Popular from "../../components/Popular/Popular";
import { useOrderStore } from "../../store/orderStore";

export default function Orders() {
  const { orders, decrement, increment } = useOrderStore();

  const total = orders.reduce(
    (sum, item) => sum + item.count * Number(item.price),
    0
  );

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
          <p className="service_text">За обслуживание 15%</p>
        </div>

        {orders.map((order) => (
          <div className="orders_main" key={order.id}>
            <div className="order_imgs">
              <img src={order.image} alt={order.name} />
              <div className="texts_column">
                <p className="name_order">{order.name}</p>
                <p className="price_order">
                  {Number(order.price) * order.count}с
                </p>
              </div>
            </div>
            <div className="coin_counter">
              <button onClick={() => decrement(order.id)}>-</button>
              <span>{String(order.count).padStart(2, "0")}</span>
              <button onClick={() => increment(order.id)}>+</button>
            </div>
          </div>
        ))}

        <button className="total_prise">
          Итого <span>{total}с</span>
        </button>
        <button className="order_more">Заказать еще</button>
        <p className="add_again">Добавить еще</p>

        <Popular onAddClick={useOrderStore((state) => state.addToOrder)} />
      </div>
    </section>
  );
}

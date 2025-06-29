export default function FoodsItem({ food, onAddClick }) {
  // const baseUrl = "https://api-menu.70yil.info";

  // const imageUrl =
  //   food.image && !food.image.startsWith("http")
  //     ? baseUrl + food.image
  //     : food.image || "https://via.placeholder.com/150";

  const imageUrl = food.image;

  return (
    <div className="food_card">
      <img
        className="food_img"
        src={food.image}
        alt={food.name || "food image"}
      />
      <div className="wrapper_texts">
        <div className="food_texts">
          <p className="texts">{food.name || "Без названия"}</p>
          <p className="price">
            {food.price ? `${food.price} с` : "Цена не указана"}
          </p>
        </div>
        <button className="btn" onClick={onAddClick}>
          +
        </button>
      </div>
    </div>
  );
}

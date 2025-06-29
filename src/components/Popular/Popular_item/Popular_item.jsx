export default function Popular_item({ food, onAddClick }) {
  return (
    <div className="food_cards">
      <img
        className="foods_img"
        src={food.image}
        alt={food.name}
        width={108}
        height={108}
        style={{ borderRadius: 16 }}
      />
      <div className="wrappers_texts">
        <div className="foods_texts">
          <div className="texts">{food.name}</div>
          <div className="prices">{food.price ? `${food.price}с` : "0с"}</div>
        </div>
        <div className="parents_btn">
          <button className="btns" onClick={() => onAddClick(food)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

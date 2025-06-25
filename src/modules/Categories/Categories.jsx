import Category_food from "../../components/Category_food/Category_food";

export default function Categories() {
  return (
    <>
      <section className="filters">
        <div className="container">
          <div className="filters_wrapper">
            <button className="btns">Горячее</button>
            <button className="btns">Бар</button>
            <button className="btns">Завтраки</button>
            <button className="btns">Холодное</button>
          </div>
        </div>
      </section>
      <Category_food/>
    </>
  );
}

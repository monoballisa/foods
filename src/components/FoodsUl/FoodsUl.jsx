import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FoodsItem from "./FoodsItem/FoodsItem";
import { foods } from "../../data/foods";

export default function FoodsUl({ onAddClick }) {
  return (
    <section className="food">
      <div className="container">
        <Swiper spaceBetween={8} slidesPerView={2.2} grabCursor={true}>
          {foods.map((food) => (
            <SwiperSlide key={food.id}>
              <FoodsItem food={food} onAddClick={() => onAddClick(food)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

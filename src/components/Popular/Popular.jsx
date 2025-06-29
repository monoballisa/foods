import Popular_item from "./Popular_item/Popular_item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useOrderStore } from "../../store/orderStore";
import popularFoodsWorld from "../../data/popular";

export default function Popular() {
  const addToOrder = useOrderStore((state) => state.addToOrder);

  return (
    <section className="popular">
      <div className="container">
        <Swiper spaceBetween={6} slidesPerView={2.2} grabCursor={true}>
          {popularFoodsWorld.map((food) => (
            <SwiperSlide key={food.id}>
              <Popular_item food={food} onAddClick={addToOrder} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

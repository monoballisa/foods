import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FoodsItem from "./FoodsItem/FoodsItem";

export default function FoodsUl() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api-menu.70yil.info/api/products")
      .then((res) => {
        if (Array.isArray(res.data.products)) {
          setFoods(res.data.products);
        } else if (Array.isArray(res.data)) {
          setFoods(res.data);
        } else {
          console.warn("Unexpected API format", res.data);
          setError("Получены данные в неожиданном формате");
        }
      })
      .catch((err) => {
        console.error("Ошибка при загрузке продуктов:", err);
        setError("Ошибка при загрузке продуктов");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddClick = (food) => {
    alert(`Добавлен продукт: ${food.name || "Без названия"}`);
  };

  return (
    <section className="food">
      <div className="container">
        {loading ? (
          <p>Загрузка...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : foods.length > 0 ? (
          <Swiper spaceBetween={8} slidesPerView={2.2} grabCursor={true}>
            {foods.map((food) => (
              <SwiperSlide key={food.id}>
                <FoodsItem
                  food={food}
                  onAddClick={() => handleAddClick(food)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>Нет продуктов для отображения</p>
        )}
      </div>
    </section>
  );
}

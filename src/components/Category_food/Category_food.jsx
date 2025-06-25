import axios from "axios";
import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api-menu.70yil.info/api/categories")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setCategories(res.data);
        } else {
          setError("Неверный формат данных");
        }
      })
      .catch(() => {
        setError("Ошибка при загрузке категорий");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="food">
      <div className="container">
        {loading ? (
          <p>Загрузка...</p>
        ) : error ? (
          <p>{error}</p>
        ) : categories.length > 0 ? (
          <div className="categories_grid">
            {categories.map((category) => (
              <div className="food_card" key={category.id}>
                <img
                  className="food_img"
                  src={
                    category.image
                      ? `https://api-menu.70yil.info${category.image}`
                      : "https://via.placeholder.com/150"
                  }
                  alt={category.name || "Без названия"}
                />
                <div className="wrapper_texts">
                  <div className="food_texts">
                    <p className="texts">{category.name}</p>
                    <p className="price">
                      {category.products_count
                        ? `${category.products_count} товаров`
                        : "0 товаров"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Категории не найдены</p>
        )}
      </div>
    </section>
  );
}

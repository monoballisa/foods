import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoSearchSharp } from "react-icons/io5";
import { MdKeyboardVoice, MdTune } from "react-icons/md";

export default function Search() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const query = params.get("query") || "";
  const fromPriceParam = params.get("from") || "";
  const toPriceParam = params.get("to") || "";

  const [inputText, setInputText] = useState(query);
  const [fromPrice, setFromPrice] = useState(fromPriceParam);
  const [toPrice, setToPrice] = useState(toPriceParam);
  const [focused, setFocused] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Поиск по тексту (query)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim()) {
      // При вводе текста сбрасываем фильтр по цене, если хочешь можно сохранить
      navigate(
        `/search?query=${encodeURIComponent(inputText.trim())}` +
          (fromPrice && toPrice ? `&from=${fromPrice}&to=${toPrice}` : "")
      );
    }
  };

  // Логика для фильтра по цене - срабатывает при нажатии Enter в полях цены
  const handlePriceKeyDown = (e) => {
    if (e.key === "Enter") {
      const fromNum = Number(fromPrice);
      const toNum = Number(toPrice);
      if (
        !isNaN(fromNum) &&
        !isNaN(toNum) &&
        fromPrice !== "" &&
        toPrice !== "" &&
        fromNum <= toNum
      ) {
        navigate(
          `/search?query=${encodeURIComponent(
            inputText.trim()
          )}&from=${fromNum}&to=${toNum}`
        );
      } else {
        alert(
          "Пожалуйста, введите корректный диапазон цен (От должно быть меньше или равно До)."
        );
      }
    }
  };

  const handleFilterClick = (category) => {
    if (category === "") {
      navigate(`/search`);
      setInputText("");
      setFromPrice("");
      setToPrice("");
    } else {
      navigate(`/search?query=${encodeURIComponent(category)}`);
      setInputText(category);
      setFromPrice("");
      setToPrice("");
    }
  };

  useEffect(() => {
    setInputText(query);
    setFromPrice(fromPriceParam);
    setToPrice(toPriceParam);

    if (!query) {
      setResults([]);
      return;
    }

    setLoading(true);
    axios
      .get("https://api-menu.70yil.info/api/products")
      .then((res) => {
        const allProducts = res.data.products || res.data;

        let filtered = allProducts.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );

        if (fromPriceParam !== "" && toPriceParam !== "") {
          const fromNum = Number(fromPriceParam);
          const toNum = Number(toPriceParam);
          filtered = filtered.filter(
            (product) =>
              !isNaN(product.price) &&
              product.price >= fromNum &&
              product.price <= toNum
          );
        }

        setResults(filtered);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке продуктов:", err);
        setResults([]);
      })
      .finally(() => setLoading(false));
  }, [query, fromPriceParam, toPriceParam]);

  return (
    <section className="search-results">
      <div className="container">
        <div className="search">
          <div className="search_wrapper">
            <div className="search-bar">
              <IoSearchSharp className="icon left" />
              <input
                type="text"
                placeholder={focused ? "" : "Поиск..."}
                value={inputText}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <MdKeyboardVoice
                className={`icon right ${focused ? "voice-focus" : ""}`}
              />
            </div>
            <button className="filter-btn-icon">
              <MdTune className="icon_filter" />
            </button>
          </div>

          <h3 className="categorie_title">Категория</h3>
          <div className="filter_buttons">
            <button
              className={`filter_btn ${query === "" ? "active" : ""}`}
              onClick={() => handleFilterClick("")}
            >
              Все
            </button>
            <button
              className={`filter_btn ${query === "Бар" ? "active" : ""}`}
              onClick={() => handleFilterClick("Бар")}
            >
              Бар
            </button>
            <button
              className={`filter_btn ${query === "Завтраки" ? "active" : ""}`}
              onClick={() => handleFilterClick("Завтраки")}
            >
              Завтраки
            </button>
            <button
              className={`filter_btn ${query === "Фастфуд" ? "active" : ""}`}
              onClick={() => handleFilterClick("Фастфуд")}
            >
              Фастфуд
            </button>
            <button
              className={`filter_btn ${query === "Холодное" ? "active" : ""}`}
              onClick={() => handleFilterClick("Холодное")}
            >
              Холодное
            </button>
            <button
              className={`filter_btn ${query === "Горячее" ? "active" : ""}`}
              onClick={() => handleFilterClick("Горячее")}
            >
              Горячее
            </button>
            <button
              className={`filter_btn ${query === "Восточное" ? "active" : ""}`}
              onClick={() => handleFilterClick("Восточное")}
            >
              Восточное
            </button>
            <button
              className={`filter_btn ${query === "Азиатское" ? "active" : ""}`}
              onClick={() => handleFilterClick("Азиатское")}
            >
              Азиатское
            </button>
          </div>
        </div>

        <h2 className="food_price">Цена</h2>
        <div className="double-search-container">
          <input
            type="text"
            min="0"
            placeholder="От 0"
            value={fromPrice}
            onChange={(e) => setFromPrice(e.target.value)}
            onKeyDown={handlePriceKeyDown}
          />
          <input
            type="text"
            min="0"
            placeholder="До 0"
            value={toPrice}
            onChange={(e) => setToPrice(e.target.value)}
            onKeyDown={handlePriceKeyDown}
          />
        </div>

        {loading && <p>Загрузка...</p>}
        {!loading && results.length === 0 && <p>Ничего не найдено.</p>}

        <ul className="results_list">
          {results.map((product) => (
            <li key={product.id} className="result_item">
              <img
                className="result_image"
                src={
                  product.image?.startsWith("http")
                    ? product.image
                    : `https://api-menu.70yil.info/${product.image || ""}`
                }
                alt={product.name}
              />
              <p>{product.name}</p>
              <span>{product.price} с</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

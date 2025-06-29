import { useState } from "react";
import popular from "../../data/popular";
import { foods } from "../../data/foods";

export default function SearchPopularAndFoods() {
  const allItems = [
    ...popular.map((item) => ({ ...item, uniqueId: "popular-" + item.id })),
    ...foods.map((item) => ({ ...item, uniqueId: "foods-" + item.id })),
  ];

  const [query, setQuery] = useState("");
  const [results, setResults] = useState(allItems);

  const handleSearch = (e) => {
    const val = e.target.value.toLowerCase();
    setQuery(val);

    if (!val) {
      setResults(allItems);
      return;
    }

    const filtered = allItems.filter((item) =>
      item.name.toLowerCase().includes(val)
    );
    setResults(filtered);
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Поиск по популярным и другим блюдам..."
        value={query}
        onChange={handleSearch}
      />

      {results.length === 0 && <p>Ничего не найдено.</p>}

      <ul>
        {results.map((item) => (
          <li key={item.uniqueId}>
            <img
              src={item.image}
              alt={item.name}
              width={50}
              height={50}
              style={{ borderRadius: 8, marginRight: 8 }}
            />
            <span>{item.name}</span> — <b>{item.price} с</b>
          </li>
        ))}
      </ul>
    </section>
  );
}

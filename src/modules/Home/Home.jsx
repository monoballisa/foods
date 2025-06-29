import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import FoodsUl from "../../components/FoodsUl/FoodsUl";
import Popular from "../../components/Popular/Popular";
import { useOrderStore } from "../../store/orderStore";

export default function Home() {
  const addToOrder = useOrderStore((state) => state.addToOrder);

  return (
    <>
      <Header />
      <div className="flex">
        <main className="flex-1 p-4">
          <Hero />
          <FoodsUl onAddClick={addToOrder} />
          <Popular onAddClick={addToOrder} />
        </main>
      </div>
    </>
  );
}

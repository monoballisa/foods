import FoodsUl from "../../components/FoodsUl/FoodsUl";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        <main className="flex-1 p-4">
          <Hero />
          <FoodsUl />
        </main>
      </div>
    </>
  );
}

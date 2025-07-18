import NewProducts from "@/components/Home/NewProducts";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import TrendingProducts from "@/components/Home/TrendingProducts";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <NewProducts />
      <TrendingProducts />
    </>
  );
}

export default Home;

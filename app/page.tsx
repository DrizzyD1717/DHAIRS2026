import BestSellers from "@/components/BestSellers";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Features></Features>
      <Categories></Categories>
      <BestSellers></BestSellers>
      <Reviews></Reviews>
    </>
  );
}

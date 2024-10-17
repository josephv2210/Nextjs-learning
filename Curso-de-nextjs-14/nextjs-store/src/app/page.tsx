import { Description } from "./components/home/Description";
import { Hero } from "./components/home/Hero";
import { MainProducts } from "./components/home/MainProducts/MainProducts";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero/>
      <Description />
      <MainProducts/>
    </div>
  );
}

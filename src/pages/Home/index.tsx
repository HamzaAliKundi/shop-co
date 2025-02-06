import Brands from "../../components/Home/Brands";
import BrowseByStyle from "../../components/Home/BrowseByStyle";
import Hero from "../../components/Home/Hero";
import NewArrivals from "../../components/Home/NewArrivals";
import Newsletter from "../../components/layout/Footer/NewsLatter";
import Testimonials from "../../components/Home/Testimonials";
import { TopSelling } from "../../components/Home/TopSelling";


const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <Brands />
      <NewArrivals />
      <hr className="max-w-[1340px] mx-auto px-4 lg:px-6" />
      <TopSelling />
      <BrowseByStyle />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
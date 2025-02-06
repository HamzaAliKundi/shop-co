import Hero from '../../components/home/Hero/Hero';
import Brands from '../../components/home/Brands/Brands';
import NewArrivals from '../../components/home/NewArrivals/NewArrivals';
import BrowseByStyle from '../../components/home/BrowseByStyle/BrowseByStyle';
import Testimonials from '../../components/home/Testimonials/Testimonials';
import Newsletter from '../../components/home/Newsletter/Newsletter';
import { TopSelling } from '../../components/home/TopSelling/TopSelling';

const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <Brands />
      <NewArrivals />
      <div className="max-w-[1340px] mx-auto px-4 lg:px-6">
       <hr />
      </div>

      <TopSelling />
      <BrowseByStyle />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
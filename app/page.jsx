import Banner from "@/components/Banner/Banner";
import SectionBanner from "@/components/SectionBanner";
import ToRatedTV from "@/components/ToPRated/ToRatedTV";
import Trending from "@/components/Trending/Trending";
import UpComing from "@/components/UpComing/UpComing";
const Home = () => {
  return (
    <div>
      <Banner />
      <Trending />
      <UpComing />
      <SectionBanner />
      <ToRatedTV />
    </div>
  );
};

export default Home;

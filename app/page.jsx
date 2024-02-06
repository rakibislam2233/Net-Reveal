import Banner from "@/components/Banner/Banner";
import RecommendedTV from "@/components/RecommendedTV.jsx/RecommendedTV";
import SectionBanner from "@/components/SectionBanner";
import TopArtist from "@/components/TopArtist/TopArtist";
import TopRatedTV from "@/components/TopRated/TopRatedTV";
import Trending from "@/components/Trending/Trending";
import UpComing from "@/components/UpComing/UpComing";
import WatchForFree from "@/components/WatchForFree/WatchForFree";
const Home = () => {
  return (
    <div>
      <Banner />
      <Trending />
      <UpComing />
      <SectionBanner />
      <TopRatedTV />
      <WatchForFree />
      <RecommendedTV />
      <TopArtist />
    </div>
  );
};

export default Home;

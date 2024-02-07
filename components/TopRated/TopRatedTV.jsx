import Carasoul from "../shared/Carasoul";
import SectionTitle from "../shared/SectionTitle";
import TVCard from "../shared/TVCard";
import { getMovieOrTVGenres, getTopRatedMoviesOrTV } from "@/lib/api";
const TopRatedTV = async() => {
  const topRatedTVs = await getTopRatedMoviesOrTV("tv");
  const genreDataTv = await getMovieOrTVGenres("tv");
  return (
    <div className="w-full container mx-auto px-3 mt-[50px]">
      <SectionTitle title={"Top Tv Show"} path={"/"} />
      <Carasoul>
        {topRatedTVs?.results?.map((topRatedTV, index) => (
          <TVCard
            key={topRatedTV.id}
            movie={topRatedTV}
            genreDataTv={genreDataTv}
          />
        ))}
      </Carasoul>
    </div>
  );
};

export default TopRatedTV;

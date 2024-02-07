import Carasoul from "../shared/Carasoul";
import TVCard from "../shared/TVCard";
import SectionTitle from "../shared/SectionTitle";
import { getMovieOrTVGenres, getRecommendedTvShow } from "@/lib/api";

const RecommendedTV = async () => {
  const recommendedTVs = await getRecommendedTvShow("tv");
  const genreDataTv = await getMovieOrTVGenres("tv");
  return (
    <div className="w-full container mx-auto px-3 mt-[50px]">
      <SectionTitle title={"Recommended for you "} path={"/"} />
      <Carasoul>
        {recommendedTVs?.results?.map((recommendedTV) => (
          <TVCard
            key={recommendedTV.id}
            movie={recommendedTV}
            genreDataTv={genreDataTv}
          />
        ))}
      </Carasoul>
    </div>
  );
};

export default RecommendedTV;

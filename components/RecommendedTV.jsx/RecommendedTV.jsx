"use client";
import { useGetRecommendedTvShowQuery } from "@/redux/features/api/apiSlice";
import Carasoul from "../shared/Carasoul";
import TVCard from "../shared/TVCard";
import SectionTitle from "../shared/SectionTitle";

const RecommendedTV = () => {
  const {
    isLoading,
    isSuccess,
    data: recommendedTVs = [],
  } = useGetRecommendedTvShowQuery("tv");
  const randomIndices = recommendedTVs?.results?.map((_, index) => index);
  return (
    <div className="w-full container mx-auto px-3 mt-[50px]">
      <SectionTitle title={"Recommended for you "} path={"/"} />
      <Carasoul>
        {recommendedTVs?.results?.map((recommendedTV, index) => (
          <TVCard
            key={recommendedTV.id}
            movie={recommendedTV}
            index={randomIndices[index]}
          />
        ))}
      </Carasoul>
    </div>
  );
};

export default RecommendedTV;

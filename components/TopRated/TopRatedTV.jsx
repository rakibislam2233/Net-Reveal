"use client";
import { useGetTopRatedMoviesOrTVQuery } from "@/redux/features/api/apiSlice";
import Carasoul from "../shared/Carasoul";
import SectionTitle from "../shared/SectionTitle";
import TVCard from "../shared/TVCard";
const TopRatedTV = () => {
  const {
    isLoading,
    isSuccess,
    data: topRatedTVs = [],
  } = useGetTopRatedMoviesOrTVQuery("tv");
  const randomIndices = topRatedTVs?.results?.map((_, index) => index);
  return (
    <div className="w-full container mx-auto px-3 mt-[50px]">
      <SectionTitle title={"Top Tv Show"} path={"/"} />
      <Carasoul>
        {topRatedTVs?.results?.map((topRatedTV, index) => (
          <TVCard
            key={topRatedTV.id}
            movie={topRatedTV}
            index={randomIndices[index]}
          />
        ))}
      </Carasoul>
    </div>
  );
};

export default TopRatedTV;

"use client";
import { useGetTopRatedMoviesOrTVQuery } from "@/redux/features/api/apiSlice";
import Carasoul from "../shared/Carasoul";
import MovieCard from "../shared/MovieCard";
import TVCard from "../shared/TVCard";
const ToRatedTV = () => {
  const {
    isLoading,
    isSuccess,
    data: topRatedTVs = [],
  } = useGetTopRatedMoviesOrTVQuery("tv");
  const randomIndices = topRatedTVs?.results?.map((_, index) => index);
  return (
    <div className="w-full container mx-auto px-3 mt-[50px]">
      <h1 className="text-3xl font-bold">Top Tv Show</h1>
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

export default ToRatedTV;

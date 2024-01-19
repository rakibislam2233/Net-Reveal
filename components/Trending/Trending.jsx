"use client";
import { useGetTrendingMovieOrTvQuery } from "@/redux/features/api/apiSlice";
import Carasoul from "../shared/Carasoul";
import MovieCard from "../shared/MovieCard";
const Trending = () => {
  const {
    isLoading,
    isSuccess,
    data: trendingMovies = [],
  } = useGetTrendingMovieOrTvQuery("movie");
  const randomIndices = trendingMovies?.results?.map((_, index) => index);
  return (
    <div className="w-full container mx-auto px-3 mt-[50px]">
      <h1 className="text-3xl font-bold">Trending Movies</h1>
      <Carasoul>
        {trendingMovies?.results?.map((trendingMovie, index) => (
          <MovieCard
            key={trendingMovie.id}
            movie={trendingMovie}
            index={randomIndices[index]}
          />
        ))}
      </Carasoul>
    </div>
  );
};

export default Trending;

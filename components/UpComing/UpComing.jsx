'use client'
import { useGetUpcomingMoviesQuery } from "@/redux/features/api/apiSlice";
import Carasoul from "../shared/Carasoul";
import MovieCard from "../shared/MovieCard";

const UpComing = () => {
  const {
    isLoading,
    isSuccess,
    data: upComingMovies = [],
  } = useGetUpcomingMoviesQuery();
  const randomIndices = upComingMovies?.results?.map((_, index) => index);
  return (
    <div className="w-full container mx-auto px-3 mt-[50px]">
      <h1 className="text-3xl font-bold">UpComing Movies</h1>
      <Carasoul>
        {upComingMovies?.results?.map((upComingMovie, index) => (
          <MovieCard
            key={upComingMovie.id}
            movie={upComingMovie}
            index={randomIndices[index]}
            type={'movie'}
          />
        ))}
      </Carasoul>
    </div>
  );
};

export default UpComing;

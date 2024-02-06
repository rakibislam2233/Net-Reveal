'use client'
import { useGetUpcomingMoviesQuery } from "@/redux/features/api/apiSlice";
import Carasoul from "../shared/Carasoul";
import MovieCard from "../shared/MovieCard";
import SectionTitle from "../shared/SectionTitle";

const UpComing = () => {
  const {
    isLoading,
    isSuccess,
    data: upComingMovies = [],
  } = useGetUpcomingMoviesQuery();
  const randomIndices = upComingMovies?.results?.map((_, index) => index);
  return (
    <div className="w-full container mx-auto px-3 mt-[50px]">
      <SectionTitle title={'UpComing Movies'} path={'/'}/>
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

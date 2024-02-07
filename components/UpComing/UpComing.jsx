import Carasoul from "../shared/Carasoul";
import MovieCard from "../shared/MovieCard";
import SectionTitle from "../shared/SectionTitle";
import { getMovieOrTVGenres, getUpcomingMovies } from "@/lib/api";

const UpComing =async () => {
  const upComingMovies = await getUpcomingMovies();
  const genreDataMovie = await getMovieOrTVGenres("movie");
  return (
    <div className="w-full container mx-auto px-3 mt-[50px]">
      <SectionTitle title={"UpComing Movies"} path={"/"} />
      <Carasoul>
        {upComingMovies?.results?.map((upComingMovie, index) => (
          <MovieCard
            key={upComingMovie.id}
            movie={upComingMovie}
            genreDataMovie={genreDataMovie}
          />
        ))}
      </Carasoul>
    </div>
  );
};

export default UpComing;

import Carasoul from "../shared/Carasoul";
import MovieCard from "../shared/MovieCard";
import SectionTitle from "../shared/SectionTitle";
import { getMovieOrTVGenres, getTrendingMovieOrTv } from "@/lib/api";
const Trending = async () => {
  const trendingMovies = await getTrendingMovieOrTv("movie");
  const genreDataMovie = await getMovieOrTVGenres("movie");
  return (
    <div className="w-full container mx-auto px-3 mt-[50px]">
      <SectionTitle title={"Trending"} path={"/"} />
      <Carasoul>
        {trendingMovies?.results?.map((trendingMovie, index) => (
          <MovieCard
            key={trendingMovie.id}
            movie={trendingMovie}
            genreDataMovie={genreDataMovie}
          />
        ))}
      </Carasoul>
    </div>
  );
};

export default Trending;

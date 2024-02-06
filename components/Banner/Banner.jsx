import { getMovieOrTVGenres, getMovieOrTvKeywords, getPopularMoviesOrTV } from "@/lib/api";
import { BannerCarasoul } from "../shared/BannerCarasoul";
import BannerDetails from "./BannerDetails";

const Banner = async () => {
  const movies = await getPopularMoviesOrTV("movie");
  return (
    <BannerCarasoul>
      {movies?.results?.slice(0, 20).map((movie) => (
        <BannerDetails key={movie.id} movie={movie} />
      ))}
    </BannerCarasoul>
  );
};

export default Banner;

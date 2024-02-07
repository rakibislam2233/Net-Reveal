"use client";

import {
  useGetMovieOrTVTrailerQuery,
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesOrTVQuery,
} from "@/redux/features/api/apiSlice";

const Movies = () => {
  const { data: movies } = useGetPopularMoviesOrTVQuery("movie");
  const { data: tvShow } = useGetPopularMoviesOrTVQuery("tv");
  return (
    <div className="grid grid-cols-2 gap-10 text-white">
      <div>
      <ul>
        {movies?.results?.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      </div>
      <div>
      {tvShow?.results?.map((tv) => <li key={tv.id}>{tv.id}</li>)}
      </div>
    </div>
  );
};

export default Movies;

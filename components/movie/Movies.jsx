"use client";
import { getDiscoverMovies, getMovieOrTVGenres } from "@/lib/api";
import PageTitle from "../shared/PageTitle";
import { useEffect, useState } from "react";
import MovieCard from "../shared/MovieCard";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [sortMovies, setSortMovies] = useState("popularity.desc");
  const [queryGenres, setQueryGenres] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [moviesPerPage, setMoviesPerPage] = useState(8); // Number of movies per page
  const [maxPageButtons, setMaxPageButtons] = useState(5); // Maximum number of page buttons to display
  const fetchPopularMovies = async (page, sortMovies) => {
    const movies = await getDiscoverMovies(page, sortMovies);
    setPopularMovies(movies);
  };
  const fetchGenres = async () => {
    const genresData = await getMovieOrTVGenres("movie");
    setGenres(genresData);
  };
  useEffect(() => {
    fetchPopularMovies(page, sortMovies);
    fetchGenres();
  }, [page, sortMovies]);
  const handleGenreClick = (id) => {
    const index = queryGenres.indexOf(id);
    if (index === -1) {
      setQueryGenres([...queryGenres, id]);
    } else {
      const updatedGenres = [...queryGenres];
      updatedGenres.splice(index, 1);
      setQueryGenres(updatedGenres);
    }
  };
  const handleSortChange = (event) => {
    const selectedSortOption = event.target.value;
    setSortMovies(selectedSortOption);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(popularMovies.length / moviesPerPage);

  // Calculate starting and ending indexes for movies to display on current page
  const startIndex = (page - 1) * moviesPerPage;
  const endIndex = Math.min(startIndex + moviesPerPage, popularMovies.length);

  // Calculate starting and ending indexes for pagination buttons
  let startPageIndex = Math.max(1, page - Math.floor(maxPageButtons / 2));
  let endPageIndex = Math.min(totalPages, startPageIndex + maxPageButtons - 1);

  // Adjust startPageIndex if there are fewer pages than maxPageButtons
  if (endPageIndex - startPageIndex + 1 < maxPageButtons) {
    startPageIndex = Math.max(1, endPageIndex - maxPageButtons + 1);
  }

  // Event handler for moving to the previous page
  const handlePrevPage = () => {
    setPage(Math.max(1, page - 1));
  };

  // Event handler for moving to the next page
  const handleNextPage = () => {
    setPage(Math.min(totalPages, page + 1));
  };

  return (
    <div className="w-full container mx-auto text-white px-5">
      <PageTitle title={"Movie"} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 py-5">
        <div className="col-span-full md:col-span-2">
          <h1 className="text-2xl font-semibold">Genres</h1>
          <ul className="flex lg:flex-col gap-3 pt-5 flex-wrap">
            {genres?.genres?.map((genre) => (
              <li
                onClick={() => handleGenreClick(genre.id)}
                className={`w-32 p-1 rounded-full border border-gray-600 text-center cursor-pointer ${
                  queryGenres.includes(genre.id) &&
                  "bg-teal-500 border-teal-500"
                }`}
                key={genre.id}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-full md:col-span-10">
          <h1 className="text-2xl font-semibold">Movies</h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {popularMovies.slice(startIndex, endIndex).map((popularMovie) => (
              <MovieCard key={popularMovie.id} movie={popularMovie} />
            ))}
          </div>
          <div className="flex justify-center mt-5">
            {/* Left arrow button */}
            <button
              className="mx-1 px-3 py-1 rounded-md bg-gray-300 text-gray-700"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              <HiOutlineArrowNarrowLeft className="w-5 h-5 " />
            </button>
            {/* Pagination */}
            {[...Array(endPageIndex - startPageIndex + 1)].map((_, index) => (
              <button
                key={startPageIndex + index}
                className={`mx-1 px-3 py-1 rounded-md ${
                  startPageIndex + index === page
                    ? "bg-teal-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
                onClick={() => setPage(startPageIndex + index)}
              >
                {startPageIndex + index}
              </button>
            ))}
            {/* Right arrow button */}
            <button
              className="mx-1 px-3 py-1 rounded-md bg-gray-300 text-gray-700"
              onClick={handleNextPage}
              disabled={page === totalPages}
            >
              <HiOutlineArrowNarrowRight className="w-5 h-5 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;

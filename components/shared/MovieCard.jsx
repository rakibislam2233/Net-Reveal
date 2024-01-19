import imdb from "@/assets/image/imdb.png";
import play from "@/assets/logo/play.png";
import { useGetMovieOrTVGenresQuery } from "@/redux/features/api/apiSlice";
import Image from "next/image";
const formatItems = (items) => {
  return items
    ?.slice(0, 2)
    ?.map((item) => item?.name)
    .join(", ");
};
const MovieCard = ({ movie, index }) => {
  const { data: genreDataMovie } = useGetMovieOrTVGenresQuery("movie");
  const { id, title, poster_path, genre_ids } = movie;
  const genres = genre_ids.map((id) =>
    genreDataMovie?.genres.find((genre) => genre.id === id)
  );
  const genreNames = formatItems(genres);
  const movieTimes = [
    "2 hr 25 min",
    "1 hr 17 min",
    "3 hr 20 min",
    "1 hr 10 min",
    "2 hr 5 min",
    "3 hr 10 min",
    "2 hr 55 min",
    "2 hr 25 min",
    "1 hr 2 min",
    "3 hr 56 min",
    "1 hr 30 min",
    "2 hr 10 min",
    "3 hr 00 min",
    "1 hr 45 min",
  ];
  // Use the index to get a unique movie time for each card
  const selectedMovieTime = movieTimes[index % movieTimes.length];
  return (
    <div className="w-full h-full p-2 group rounded-xl cursor-grab">
      <div className="w-full relative overflow-hidden rounded-xl">
        <Image
          className="rounded-xl group-hover:opacity-25 group-hover:scale-105 transition-all duration-300"
          width={500}
          height={500}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          layout="responsive"
          placeholder="blur"
          blurDataURL="data:image/png;base64, iVBORw0KG..."
        />
        <div className="absolute top-0 left-0 right-0 w-full h-full flex justify-center items-center transition-all duration-300">
          <Image
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
            width={60}
            height={60}
            src={play}
            alt="play"
          />
        </div>
      </div>
      <div className="px-2 py-5 space-y-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex justify-between items-center">
          <span>{selectedMovieTime}</span>
          <Image width={45} height={45} src={imdb} alt="imdb" />
        </div>
        <p>{genreNames}</p>
      </div>
    </div>
  );
};

export default MovieCard;

import imdb from "@/assets/image/imdb.png";
import play from "@/assets/logo/play.png";
import Image from "next/image";
import { BsHeartFill, BsPlus, BsShareFill } from "react-icons/bs";
const formatItems = (items) => {
  return items
    ?.slice(0, 2)
    ?.map((item) => item?.name)
    .join(", ");
};
const MovieCard = ({ movie, genreDataMovie }) => {
  const { id, title, poster_path, genre_ids} = movie;
  const genres = genre_ids.map((id) =>
    genreDataMovie?.genres.find((genre) => genre.id === id)
  );
  const genreNames = formatItems(genres);
  return (
    <div className="w-full h-full p-2 group rounded-xl">
      <div className="w-full relative overflow-hidden rounded-xl cursor-grab">
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
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex gap-3">
            <BsHeartFill className="w-4 h-4 hover:text-rose-600 cursor-pointer" />
            <BsShareFill className="w-4 h-4 hover:text-rose-600 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span>{genreNames}</span>
          </div>
          <Image width={45} height={45} src={imdb} alt="imdb" />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

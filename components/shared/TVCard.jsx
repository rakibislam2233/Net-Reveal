import Image from "next/image";
import play from "@/assets/logo/play.png";
import { BsHeartFill, BsShareFill } from "react-icons/bs";
import { ReactRating } from "./Rating";
const formatItems = (items) => {
  return items
    ?.slice(0, 2)
    ?.map((item) => item?.name)
    .join(", ");
};
const TVCard = ({ movie,genreDataTv}) => {
  const { id, name, poster_path, genre_ids,vote_average } = movie;
  const genres = genre_ids.map((id) =>
    genreDataTv?.genres.find((genre) => genre.id === id)
  );
  const genreNames = formatItems(genres);
  return (
    <div className="w-full h-full p-2 group rounded-xl">
      <div className="w-full relative overflow-hidden rounded-xl cursor-grab ">
        <Image
          className="rounded-xl group-hover:opacity-25 group-hover:scale-105 transition-all duration-300"
          width={500}
          height={500}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={name}
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
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="flex gap-3">
            <BsHeartFill className="w-4 h-4 hover:text-rose-600 cursor-pointer" />
            <BsShareFill className="w-4 h-4 hover:text-rose-600 cursor-pointer" />
          </div>
        </div>
        <p>{genreNames}</p>
        <ReactRating value={vote_average.toFixed(2)}/>
      </div>
    </div>
  );
};
export default TVCard;

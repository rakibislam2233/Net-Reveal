import {
  useGetMovieOrTVGenresQuery,
  useGetMovieOrTvCastQuery,
  useGetMovieOrTvKeywordsQuery,
} from "@/redux/features/api/apiSlice";
import Image from "next/image";
import play from "@/assets/logo/play.png";
import { BsBookmark } from "react-icons/bs";
const formatItems = (items) => {
  return items
    ?.slice(0, 5)
    ?.map((item) => item?.name)
    .join(", ");
};
const BannerDetails = ({ movie }) => {
  const { data: genreData } = useGetMovieOrTVGenresQuery("movie");
  const { id, title, poster_path, overview, genre_ids } = movie;
  const { data: tags } = useGetMovieOrTvKeywordsQuery({
    type: "movie",
    id: id,
  });
  const { data: credits } = useGetMovieOrTvCastQuery({
    type: "movie",
    id: id,
  });
  // Map genre_ids to genre names
  const genres = genre_ids.map((id) =>
    genreData?.genres.find((genre) => genre.id === id)
  );
  // Extract names
  const castNames = formatItems(credits?.cast);
  const tagNames = formatItems(tags?.keywords);
  const genreNames = formatItems(genres);
  return (
    <div key={movie.id} className="cursor-pointer">
      <div
        className="w-full h-screen bg-gray-900  bg-opacity-90"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${poster_path})`,
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full container mx-auto px-5 pt-20 lg:pt-40 space-y-3">
          <div className="flex items-center gap-3 ">
            <div className="w-0.5 h-6 bg-teal-500"></div>
            <h1 className="text-xl font-bold tracking-widest">Now Playing</h1>
          </div>
          <h1 className="text-4xl font-bold animate__bounceInLeft">{title}</h1>
          <p className="w-full md:w-1/2 leading-relaxed">{`${overview.substr(0,200)}`}</p>
          <div>
            <strong className="text-teal-500 font-bold">Cast:</strong>{" "}
            {castNames}
          </div>
          <div>
            <strong className="text-teal-500 font-bold">Genres:</strong>{" "}
            {genreNames}
          </div>
          <div>
            <strong className="text-teal-500 font-bold space-x-1">Tags:</strong>{" "}
            {tagNames}
          </div>
          <div className="pt-5 flex gap-5">
            <button className="px-8 py-2 flex justify-center items-center gap-2 border bg-teal-500 border-teal-500 hover:bg-transparent hover:border-white rounded-xl transition-all duration-500">
              <Image
                className="animate-pulse"
                width={30}
                height={30}
                src={play}
                alt="play"
              />
              Play Now
            </button>
            <button className="px-8 py-2 flex justify-center items-center gap-2 border rounded-xl hover:bg-teal-500 hover:border-teal-500 transition-all duration-500">
              Watch Later
              <BsBookmark />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDetails;

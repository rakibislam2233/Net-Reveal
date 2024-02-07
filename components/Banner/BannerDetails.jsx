import Image from "next/image";
import play from "@/assets/logo/play.png";
import { BsBookmark } from "react-icons/bs";
import imdb from "@/assets/image/imdb.png";
import { FaStar } from "react-icons/fa";
import PlayTrailer from "../shared/PlayTrailer";
const BannerDetails = ({ movie }) => {
  const { id,title, poster_path, overview, vote_average } = movie;
  return (
    <div key={id} className="cursor-pointer">
      <div
        className="w-full h-[90vh] lg:h-screen bg-gray-900  bg-opacity-90 "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${poster_path})`,
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full container mx-auto px-5 pt-20 md:pt-40 space-y-3 ">
          <div className="flex items-center gap-3 ">
            <div className="w-0.5 h-6 bg-teal-500"></div>
            <h1 className="text-xl font-bold tracking-widest">Now Playing</h1>
          </div>
          <h1 className="text-4xl font-bold animate__bounceInLeft">{title}</h1>
          <p className="w-full md:w-1/2 leading-relaxed text-xl">{`${overview.substr(
            0,
            200
          )}`}</p>
          <div className="flex gap-5 items-center">
            <div className="w-16 flex justify-center items-center border">
              TV-MA
            </div>
            <Image width={45} height={45} src={imdb} alt="imdb" />
            <div className="flex gap-2">
              <FaStar className="w-5 h-5 text-yellow-500" />
              <span>{vote_average.toFixed(2)}</span>
            </div>
          </div>
          <div className="pt-5 flex gap-5">
            <PlayTrailer id={id}>
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
            </PlayTrailer>
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

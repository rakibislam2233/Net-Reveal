import Image from "next/image";
import play from "@/assets/logo/play.png";
import SectionTitle from "../shared/SectionTitle";
import { getPopularMoviesOrTV } from "@/lib/api";
const WatchForFree = async () => {
  const data = await getPopularMoviesOrTV('tv')
  const results = data?.results || [];
  return (
    <div className="w-full container mx-auto px-3 mt-[50px]">
      <SectionTitle title={"Enjoy with your family"} path={"/"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 pb-10 py-5">
        {results?.slice(0, 7).map((item, index) => (
          <div
            key={index}
            className={`w-full h-full group rounded-xl cursor-grab col-span-1 ${
              index === 0 ? "row-span-2" : ""
            }`}
          >
            <div className="w-full relative overflow-hidden rounded-xl">
              <img
                className={`w-full ${
                  index === 0 ? "w-full h-full" : "h-56"
                } rounded-xl group-hover:opacity-25 group-hover:scale-105 transition-all duration-300`}
                src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                alt=""
              />
              <div className="absolute top-0 left-0 right-0 w-full h-full flex justify-center items-center transition-all duration-300 text-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-5">
                  <Image
                    className="cursor-pointer"
                    width={60}
                    height={60}
                    src={play}
                    alt="play"
                  />
                  <h1 className="text-2xl font-bold">{item?.name}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchForFree;

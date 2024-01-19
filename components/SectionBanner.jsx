import banner from "@/assets/image/girlsBanner.jpg";
import play from "@/assets/logo/play.png";
import Image from "next/image";
const SectionBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner.src})`,
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-full mb-10"
    >
      <div className="w-full md:w-1/2 px-5 py-10 md:px-14 md:py-20 space-y-4">
        <h1 className="text-5xl font-bold">
          The best movie and tv show on your home.
        </h1>
        <p className="text-xl">
          Welcome to Net Reveal, your go-to destination for discovering the best
          in movies and TV shows. Whether you are a film buff, TV series
          fanatic, or just looking for your next binge-worthy content, we have
          got you covered.
        </p>
        <button className="px-8 py-2 flex justify-center items-center gap-2 border bg-teal-500 border-teal-500 hover:bg-transparent hover:border-white rounded-xl transition-all duration-500">
          <Image
            className="animate-pulse"
            width={30}
            height={30}
            src={play}
            alt="play"
          />
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default SectionBanner;

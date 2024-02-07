import Progress from "@/components/shared/Progress";
import { getMovieOrTVDetails, getMovieOrTvCast } from "@/lib/api";
import Image from "next/image";
import { FaBookmark, FaPlay } from "react-icons/fa";
import { IoMdStar, IoMdHeart } from "react-icons/io";
import { CiCircleList } from "react-icons/ci";
import moment from "moment";
import PlayTrailer from "@/components/shared/PlayTrailer";
const MovieDetails = async ({ params }) => {
  const { id } = params;
  const movieDetials = await getMovieOrTVDetails({ type: "movie", id: id });
  const {
    poster_path,
    original_title,
    overview,
    popularity,
    release_date,
    runtime,
    genres,
  } = movieDetials;
  const credits = await getMovieOrTvCast({ type: "movie", id: id });
  const formattedYear = moment(release_date).format("YYYY");
  const formattedrelease_date = moment(release_date).format("MM/DD/YYYY");
  const formattedRuntime = moment
    .utc(runtime * 60 * 1000)
    .format("h[h] m[min]");
  const director = credits?.crew?.find(
    (crewMember) => crewMember.job === "Director"
  );
  const writers = credits?.crew?.filter(
    (crewMember) => crewMember.department === "Writing"
  );
  return (
    <div>
      <div
        className="w-full bg-[#032541] cursor-pointer bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${poster_path})`,
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full px-10 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="col-span-full md:col-span-3">
            <Image
              className="rounded-xl"
              width={600}
              height={600}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
              layout="responsive"
              placeholder="blur"
              blurDataURL="data:image/png;base64, iVBORw0KG..."
            />
          </div>
          <div className="col-span-full md:col-span-9 text-white">
            <h1 className="text-3xl font-semibold">{`${original_title} (${formattedYear})`}</h1>
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <button className="w-12 h-5 border text-sm">PG-13</button>
              <h1 className="py-2">{`  ${formattedrelease_date} . ${genres?.map(
                (gener) => gener.name
              )} . ${formattedRuntime} `}</h1>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <Progress popularity={popularity} />
              <h1>User Score</h1>
              <button className="w-12 h-12 bg-[#032541] flex justify-center items-center rounded-full">
                <CiCircleList className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-[#032541] flex justify-center items-center rounded-full">
                <IoMdHeart className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-[#032541] flex justify-center items-center rounded-full">
                <FaBookmark className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-[#032541] flex justify-center items-center rounded-full">
                <IoMdStar className="w-5 h-5" />
              </button>
              <PlayTrailer id={id}>
                <div className="flex gap-2">
                  <button>
                    <FaPlay />
                  </button>
                  <h1>Play Trailer</h1>
                </div>
              </PlayTrailer>
            </div>
            <h1 className="py-3 italic">The heist begins at 40,000 ft.</h1>
            <h1 className="text-xl font-semibold py-2">Overview</h1>
            <h1>{overview}</h1>
            <div className="py-5 flex gap-10">
              <div>
                <h1 className="font-medium">
                  {director ? director.name : "Not available"}
                </h1>
                <h1>Director</h1>
              </div>
              <div>
                <h1 className="font-medium">
                  {writers?.slice(0, 1).map((writer) => writer.name)}
                </h1>
                <h1>Writers</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

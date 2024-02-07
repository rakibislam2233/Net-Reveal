import Carasoul from "../shared/Carasoul";
import ArtistCard from "../shared/ArtistCard";
import { getMovieOrTvCast } from "@/lib/api";

const TopArtist = async () => {
  const credits = await getMovieOrTvCast({ type: "movie", id: "500" });
  console.log(credits);
  const artists = credits?.cast?.filter(
    (credit) => credit?.profile_path !== null
  );
  return (
    <div className="w-full container mx-auto px-3 mt-[50px]">
      <h1 className="text-3xl font-bold">Top Artists</h1>
      <Carasoul slide={2} smSlide={3} mdSlide={4} lgSlide={6}>
        {artists?.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </Carasoul>
    </div>
  );
};

export default TopArtist;

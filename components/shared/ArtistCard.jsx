const ArtistCard = ({ artist }) => {
  const { name, profile_path } = artist;
  console.log(artist);
  return (
    <div className="w-full p-2 space-y-3">
      <div className="w-32 h-32 mx-auto rounded-full ring-4 ring-teal-500 overflow-hidden">
        <img
          className="w-32 h-32 mx-auto rounded-full  hover:scale-125 transition-all duration-300 cursor-pointer"
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt=""
        />
      </div>
      <h1 className="text-center font-semibold">{name}</h1>
    </div>
  );
};

export default ArtistCard;

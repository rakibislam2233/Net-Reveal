"use client";
import Modal from "./Modal";
import { useEffect, useState } from "react";
const PlayTrailer = ({ children, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const [video, setVideo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b07785a918a90e5816110d5e6e835fd2`;
      const result = await fetch(url);
      const data = await result.json();
      const movieKey = data?.results[0]?.key;
      setVideo(movieKey);
    };
    fetchData();
  }, [id]);
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} video={video} />
    </>
  );
};

export default PlayTrailer;

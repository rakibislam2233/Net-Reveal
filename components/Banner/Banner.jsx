"use client";
import {useGetPopularMoviesOrTVQuery } from "@/redux/features/api/apiSlice";
import "keen-slider/keen-slider.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BannerDetails from "./BannerDetails";
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
};

const Banner = () => {
  const {
    isLoading,
    isSuccess,
    data: movies = [],
  } = useGetPopularMoviesOrTVQuery("movie");
  if(isLoading){
    return <h1>Loading........</h1>
  }
  return (
    <Slider {...settings}>
      {movies?.results?.slice(0,20).map((movie) => (
        <BannerDetails key={movie.id} movie={movie} />
      ))}
    </Slider>
  );
};

export default Banner;

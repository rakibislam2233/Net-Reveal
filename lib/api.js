const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "api_key=b07785a918a90e5816110d5e6e835fd2";
export const getTrendingMovieOrTv = async (type) => {
  const url = `${baseUrl}/trending/${type}/day?${apiKey}`;
  console.log(url);
  const result = await fetch(url);
  const data = result.json();
  console.log(data);
  return data;
};
export const getNowPlayingMovies = async () => {
  const url = `${baseUrl}/movie/now_playing?${apiKey}`;
  const result = await fetch(url, {
    cache: "no-store",
  });
  const data = result.json();
  return data;
};
export const getPopularMoviesOrTV = async (type) => {
  const url = `${baseUrl}/${type}/popular?${apiKey}`;
  const result = await fetch(url, {
    cache: "no-store",
  });
  const data = result.json();
  return data;
};
export const getTopRatedMoviesOrTV = async (type) => {
  const url = `${baseUrl}/${type}/top_rated?${apiKey}`;
  const result = await fetch(url, {
    cache: "no-store",
  });
  const data = result.json();
  return data;
};

export const getUpcomingMovies = async () => {
  const url = `${baseUrl}/movie/upcoming?${apiKey}`;
  const result = await fetch(url, {
    cache: "no-store",
  });
  const data = result.json();
  return data;
};
export const getMovieOrTVDetails = async (type, id) => {
  const url = `${baseUrl}/${type}/${id}?${apiKey}`;
  const result = await fetch(url, {
    cache: "no-store",
  });
  const data = result.json();
  return data;
};
export const getMovieOrTVTrailer = async (type, id) => {
  const url = `${baseUrl}/${type}/${id}/videos?${apiKey}`;
  const result = await fetch(url, {
    cache: "no-store",
  });
  const data = result.json();
  return data;
};
export const getMovieOrTVImages = async (type, id) => {
  const url = `${baseUrl}/${type}/${id}/images?${apiKey}`;
  const result = await fetch(url, {
    cache: "no-store",
  });
  const data = result.json();
  return data;
};
export const getMovieOrTVGenres = async (type) => {
  const url = `${baseUrl}/genre/${type}/list?${apiKey}`;
  const result = await fetch(url, {
    cache: "no-store",
  });
  const data = result.json();
  return data;
};
export const getMovieOrTvSearch = async (type, searchQuery) => {
  const url = `${baseUrl}/search/${type}?${apiKey}&query=${searchQuery}`;
  const result = await fetch(url, {
    cache: "no-store",
  });
  const data = result.json();
  return data;
};
export const getMovieOrTvKeywords = async (type, id) => {
  const url = `${baseUrl}/${type}/${id}/keywords?${apiKey}`;
  const result = await fetch(url, {
    cache: "no-store",
  });
  const data = result.json();
  return data;
};
export const getMovieOrTvCast = async (type, id) => {
  const url = `${baseUrl}/${type}/${id}/credits?${apiKey}`;
  const result = await fetch(url, {
    cache: "no-store",
  });
  const data = result.json();
  return data;
};
export const getRecommendedTvShow = async () => {
  const url = `${baseUrl}/tv/on_the_air?${apiKey}`;
  const result = await fetch(url, {
    cache: "no-store",
  });
  const data = result.json();
  return data;
};
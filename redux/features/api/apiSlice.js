"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getTrendingMovieOrTv: builder.query({
      query: (type) => ({
        url: `trending/${type}/day?api_key=b07785a918a90e5816110d5e6e835fd2`,
        method: "GET",
      }),
    }),
    getNowPlayingMovies: builder.query({
      query: () => ({
        url: "movie/now_playing?api_key=b07785a918a90e5816110d5e6e835fd2",
        method: "GET",
      }),
    }),
    getPopularMoviesOrTV: builder.query({
      query: (type) => ({
        url: `${type}/popular?api_key=b07785a918a90e5816110d5e6e835fd2`,
        method: "GET",
      }),
    }),
    getTopRatedMoviesOrTV: builder.query({
      query: (type) => ({
        url: `${type}/top_rated?api_key=b07785a918a90e5816110d5e6e835fd2`,
        method: "GET",
      }),
    }),
    getUpcomingMovies: builder.query({
      query: () => ({
        url: "movie/upcoming?api_key=b07785a918a90e5816110d5e6e835fd2",
        method: "GET",
      }),
    }),
    getMovieOrTVDetails: builder.query({
      query: ({ type, id }) => ({
        url: `${type}/${id}?api_key=b07785a918a90e5816110d5e6e835fd2`,
      }),
    }),
    getMovieOrTVTrailer: builder.query({
      query: ({ type, id }) => ({
        url: `${type}/${id}/videos?api_key=b07785a918a90e5816110d5e6e835fd2`,
        method: "GET",
      }),
    }),
    getMovieOrTVImages: builder.query({
      query: ({ type, id }) => ({
        url: `${type}/${id}/images?api_key=b07785a918a90e5816110d5e6e835fd2`,
        method: "GET",
      }),
    }),
    getMovieOrTVGenres: builder.query({
      query: (type) => ({
        url: `/genre/${type}/list?api_key=b07785a918a90e5816110d5e6e835fd2`,
        method: "GET",
      }),
    }),
    getMovieOrTvSearch: builder.query({
      query: ({ type, searchQuery }) => ({
        url: `search/${type}?api_key=b07785a918a90e5816110d5e6e835fd2&query=${searchQuery}`,
      }),
    }),
    getMovieOrTvKeywords: builder.query({
      query: ({ type, id }) => ({
        url: `${type}/${id}/keywords?api_key=b07785a918a90e5816110d5e6e835fd2`,
        method: "GET",
      }),
    }),
    getMovieOrTvCast: builder.query({
      query: ({ type, id }) => ({
        url: `${type}/${id}/credits?api_key=b07785a918a90e5816110d5e6e835fd2`,
        method: "GET",
      }),
    }),
    getRecommendedTvShow: builder.query({
      query: () => ({
        url: `tv/on_the_air?api_key=b07785a918a90e5816110d5e6e835fd2`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesOrTVQuery,
  useGetTopRatedMoviesOrTVQuery,
  useGetUpcomingMoviesQuery,
  useGetMovieOrTVTrailerQuery,
  useGetMovieOrTVImagesQuery,
  useGetMovieOrTVDetailsQuery,
  useGetMovieOrTVGenresQuery,
  useGetMovieOrTvSearchQuery,
  useGetMovieOrTvKeywordsQuery,
  useGetMovieOrTvCastQuery,
  useGetTrendingMovieOrTvQuery,
  useGetRecommendedTvShowQuery
} = apiSlice;

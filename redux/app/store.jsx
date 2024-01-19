'use client'

const { configureStore } = require("@reduxjs/toolkit");
const { apiSlice } = require("../features/api/apiSlice");

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>{
      return  getDefaultMiddleware().concat(apiSlice.middleware)
    }
})

export default store;
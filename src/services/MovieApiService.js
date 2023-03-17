// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/' }),
  endpoints: (builder) => ({
    getMovieById: builder.query({
      query: (id) => `movies/${id}`,
    }),
    getAllMovies: builder.query({
        query: () => `movies`,
      }),
      getAllEvents: builder.query({
        query: (id) => `events`,
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieByIdQuery ,useGetAllMoviesQuery,useGetAllEventsQuery} = movieApi
import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'
import {Post} from "../shared/interfaces/Post";


export const apis = createApi({
   reducerPath:"api",
   baseQuery: fetchBaseQuery({baseUrl:'/apis'}),
   endpoints: (builder) => ({
      getAllPosts: builder.query<Post[], string>({
         query: () => '/post',
         transformResponse: (response: { data: Post[]}) => response.data,
      }),

   })
})

export const {useGetAllPostsQuery} = apis
console.log(useGetAllPostsQuery)
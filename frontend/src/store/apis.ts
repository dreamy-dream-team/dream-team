import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'
import {Post} from "../shared/interfaces/Post";
import {Category} from "../shared/interfaces/Category";


export const apis = createApi({
   reducerPath:"api",
   baseQuery: fetchBaseQuery({baseUrl:'/apis'}),
   endpoints: (builder) => ({
      getAllPostsPublished: builder.query<Post[], string>({
         query: () => '/post',
         transformResponse: (response: { data: Post[]}) => response.data,
      }),
      getAllCategory: builder.query<Category[], string> ({
         query: () => '/category',
         transformResponse: (response: { data: Category[]}) => response.data,
      })
   })
})

export const {useGetAllPostsPublishedQuery, useGetAllCategoryQuery} = apis
console.log(useGetAllPostsPublishedQuery)


import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'
import {PartialPost, Post} from "../shared/interfaces/Post";
import {PartialProfile} from "../shared/interfaces/Profile.tsx";



export interface ServerResponse {
   status: number,
   data: unknown,
   message: string | null
}

export interface ClientResponse extends ServerResponse {
   type: "alert alert-success" | "alert alert-danger"
}

export interface MutationResponse {
   data: ClientResponse | undefined,
   error: ClientResponse | undefined
}

export const apis = createApi({
   reducerPath:"api",
   baseQuery: fetchBaseQuery({baseUrl:'/apis'}),
   tagTypes: ["Post"],
   endpoints: (builder) => ({
      getAllPosts: builder.query<Post[], string>({
         query: () => '/post',
         transformResponse: (response: { data: Post[]}) => response.data,
         providesTags: ["Post"]
      }),
      postPost: builder.mutation<ClientResponse, PartialPost >({
         query (body: PartialPost) {
            return{
               url:'/post',
               method: "POST",
               body
            }
         },
         transformResponse: transformMutationResponses,
         transformErrorResponse: transformErrorResponses,
         invalidatesTags: ["Post"]
      }),

      postSignUp: builder.mutation<ClientResponse, PartialProfile>({
         query: (payload: PartialProfile) => ({
            url:'/sign-up',
            method:'POST',
            body: payload,
         }),

      }),

   })
})

function transformMutationResponses(response: ServerResponse): ClientResponse {
   if (response.status === 200) {
      return {
         status: response.status,
         data: response.data,
         message: response.message,
         type: 'alert alert-success'
      }
   }
   return {
      status: response.status,
      data: response.data,
      message: response.message,
      type: 'alert alert-danger'
   }
}

function transformErrorResponses(): ClientResponse {
   return {
      status: 500,
      data: null,
      message: 'An unexpected error occurred',
      type: 'alert alert-danger'
   }
}

export const {useGetAllPostsQuery, usePostPostMutation, usePostSignUpMutation} = apis
console.log(useGetAllPostsQuery)


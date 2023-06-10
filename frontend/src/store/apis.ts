import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'//removed comma after fetchBase
//import {PartialPost, Post} from "../shared/interfaces/Post";
import {PartialProfile, SignIn} from "../shared/interfaces/Profile";



export interface ServerResponse {
   status: number,
   data: unknown,
   message: string | null
}

export interface ClientResponse extends ServerResponse {
   type: "alert alert-success" | "alert alert-danger"
}

export interface ClientResponseForSignIn extends ClientResponse {
   authorization: string | undefined
}

export interface MutationResponse {
   data: ClientResponse | undefined,
   error: ClientResponse | undefined
}
export const apis = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: '/apis'}),
    tagTypes: ['Post'],
    endpoints: (builder) => ({

/*        getAllPosts: builder.query<Post[], string>({
            query: () => '/post',
            transformResponse:transformResponse,
            providesTags: ["Post"]
        }),*/

/*        postPost: builder.mutation<ClientResponse, PartialPost>({
            transformResponse: transformMutationResponses,
            transformErrorResponse: transformErrorResponses,
            query (body: PartialPost) {
                return {
                    url: '/post',
                    method: "POST",
                    body
                }
            },

            invalidatesTags: ["Post"]
        }),*/

        postSignIn: builder.mutation<ClientResponseForSignIn, SignIn>({//Added ForSignIn
            query: (body: SignIn)=>{ //added arrow function
                return {
                    url: '/sign-in',
                    method: 'POST',
                    body
                }
            },
            transformErrorResponse: transformErrorResponses,
            transformResponse: (response: ServerResponse, meta): ClientResponseForSignIn => {

                const authorization = meta?.response?.headers.get('authorization') ?? undefined

                if (response.status === 200) {
                    return {
                        status: response.status,
                        data: response.data,
                        message: response.message,
                        type: 'alert alert-success',
                        authorization
                    }
                }
                return {
                    status: response.status,
                    data: response.data,
                    message: response.message,
                    type: 'alert alert-danger',
                    authorization
                }
            },
        }),

        postSignUp: builder.mutation<ClientResponse, PartialProfile>({
            transformResponse: transformMutationResponses,
            transformErrorResponse: transformErrorResponses,

            query: (body: PartialProfile)=> {  //added arrow function
                return {
                    url: '/sign-up',
                    method: 'POST',
                    body
                }
            }

        })
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

export const {usePostSignUpMutation, usePostSignInMutation} = apis


//TODO add back in (useGetAllPostsQuery, usePostPostMutation,)  &  console.log(useGetAllPostsQuery)  line 125,126
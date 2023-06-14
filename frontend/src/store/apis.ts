import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'//removed comma after fetchBase
//import {PartialPost, Post} from "../shared/interfaces/Post";
import {SignUpProfile, SignIn} from "../shared/interfaces/Profile";
import {PartialPost, Post} from "../shared/interfaces/Post.tsx";
import {Category} from "../shared/interfaces/Category.tsx";
import {PostCategory} from "../shared/interfaces/PostCategory.tsx";


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
    baseQuery: fetchBaseQuery({

        baseUrl: '/apis',
        prepareHeaders: (headers, {}) => {
                const token = window.localStorage.getItem("authorization")

                // If we have a token set in state, let's assume that we should be passing it.
                if (token) {
                    headers.set('authorization', token)
                }

                return headers
            },
        }
    ),
    tagTypes: ['Post', 'PostCategory'],
    endpoints: (builder) => ({

        getAllPosts: builder.query<Post[], string>({
            query: () => '/post',
            transformResponse: (response: { data: Post[] }) => response.data,
            providesTags: ["Post"]
        }),

        postPost: builder.mutation<ClientResponse, PartialPost>({
            transformResponse: transformMutationResponses,
            transformErrorResponse: transformErrorResponses,
            query(body: PartialPost) {
                return {
                    url: '/post',
                    method: "POST",
                    body
                }
            },

            invalidatesTags: ["Post"]
        }),

        postPostCategory: builder.mutation<ClientResponse, PostCategory>({
            transformResponse: transformMutationResponses,
            transformErrorResponse: transformErrorResponses,
            query(body: PostCategory){
                return{
                    url: '/post-category',
                    method: "POST",
                    body
                }
            },
            invalidatesTags: ["PostCategory"]
            }),

        postSignIn: builder.mutation<ClientResponseForSignIn, SignIn>({//Added ForSignIn
            query: (body: SignIn) => { //added arrow function
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

        postSignUp: builder.mutation<ClientResponse, SignUpProfile>({
            transformResponse: transformMutationResponses,
            transformErrorResponse: transformErrorResponses,

            query: (body: SignUpProfile) => {  //added arrow function
                return {
                    url: '/sign-up',
                    method: 'POST',
                    body
                }
            }

        }),

        getPublicPosts: builder.query<Post[], void>({
            query: (postProfileId) => `/postProfileId/${postProfileId}/postIsPublished/true/ `,
            // Check if endpoint is correct
            providesTags: ['Post']
        }),

        getJournalPosts: builder.query<Post[], void>({
            query: (postProfileId) => `/postProfileId/${postProfileId}/postIsPublished/false/ `,
            // Check if endpoint is correct
            providesTags: ['Post']
        }),

        getAnonymousPosts: builder.query<Post[], void>({
            query: (postProfileId) => `/postProfileId/${postProfileId}/postProfileHandleIsVisible/false/`,
            providesTags: ['Post']
        }),

        getAllCategory: builder.query<Category[], string>({
            query: () => '/category',
            transformResponse: (response: { data: Category[] }) => response.data,
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

export const {
    usePostSignUpMutation,
    usePostSignInMutation,
    useGetPublicPostsQuery,
    useGetJournalPostsQuery,
    useGetAnonymousPostsQuery,
    useGetAllCategoryQuery,
    usePostPostMutation,
    usePostPostCategoryMutation
} = apis


//TODO add back in (useGetAllPostsQuery, usePostPostMutation,)  &  console.log(useGetAllPostsQuery)  line 125,126
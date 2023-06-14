
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {Category} from "../shared/interfaces/Category";
import {PartialPost, Post} from "../shared/interfaces/Post";
import {PartialVote, Vote} from "../shared/interfaces/Vote";
import {PartialProfile, Profile, SignIn} from "../shared/interfaces/Profile";
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

    getVotesByVotePostId:builder.query<Vote[], string>
    ({
        query: (postId) => `/vote/votePostId/${postId}`,
        transformResponse: (response: { data: Vote[]}) => response.data,
        providesTags: ['Post']
    }),
    toggleVote: builder.mutation<ClientResponse, PartialVote> ({
        transformResponse: transformMutationResponses,
        transformErrorResponse: transformErrorResponses,
        query (body: PartialVote) {
            return {
                url: '/vote',
                method: 'POST',
                body
            }
        },
    }),
    getProfileByProfileId: builder.query<Profile, string> ({
        query: (profileId) => `/profile/${profileId}`,
        transformResponse: transformResponse<Profile>
    }),
    getPostByPostId: builder.query<Post, string> ({
        query: (postId) => `/post/${postId}`,
        transformResponse: transformResponse<Post>
    }),
    getAllCategory: builder.query<Category[], string> ({
        query: () => '/category',
        transformResponse: (response: { data: Category[]}) => response.data,
    }),
    getAllPostsPublished: builder.query<Post[], string>({
        query: () => '/post',
        transformResponse: (response: { data: Post[]}) => response.data,
        providesTags: ["Post"]
    }),
    getAllPostsByPostCategory: builder.query<Post[], string> ({
        query: (postCategoryId: string) => `/post/postCategoryId/${postCategoryId}`,
        transformResponse: (response: { data: Post[]}) => response.data,
        providesTags: ['Post']
    }),
    getCategoriesByPostCategoryPostId: builder.query<Category[], string> ({
        query: (postCategoryPostId: string) => `/category/postCategoryPostId/${postCategoryPostId}`,
        transformResponse: (response: { data: Category[]}) => response.data,
        providesTags: ['Post']
    }),
    postPost: builder.mutation<ClientResponse, PartialPost >({
        transformResponse: transformMutationResponses,
        transformErrorResponse: transformErrorResponses,
        query (body: PartialPost) {
            return{
                url:'/post',
                method: 'POST',
                body
            }
        },
        invalidatesTags: ['Post']
    }),
        getAllPosts: builder.query<Post[], string>({
            query: () => '/post',
            transformResponse: (response: { data: Post[] }) => response.data,
            providesTags: ["Post"]
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
            }
        }),
        postSignUp: builder.mutation<ClientResponse, PartialProfile>({
            transformResponse: transformMutationResponses,
            transformErrorResponse: transformErrorResponses,
            query (body: PartialProfile) {

                return {
                    url: '/sign-up',
                    method: 'POST',
                    body
                }
            }
        }),
        getPublicPosts: builder.query<Post[], string>({
            query: (postProfileId) => `/post/postProfileId/${postProfileId}/postIsPublished/true/ `,
            // Check if endpoint is correct
            providesTags: ['Post']
        }),
        getJournalPosts: builder.query<Post[], string>({
            query: (postProfileId) => `/post/postProfileId/${postProfileId}/postIsPublished/false/ `,
            // Check if endpoint is correct
            providesTags: ['Post']
        }),
        getAnonymousPostsByProfileId: builder.query<Post[], string>({
            query: (postProfileId) => `/post/postProfileId/${postProfileId}`,
            providesTags: ['Post'],
            transformResponse: transformResponse<Post[]>
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


function transformResponse<T> (response: ServerResponse): T {
   return response.data as T
}


export const {useGetAllPostsPublishedQuery,
   usePostPostMutation,
   useGetAllPostsByPostCategoryQuery,
   useGetCategoriesByPostCategoryPostIdQuery,
   useGetProfileByProfileIdQuery,
   useGetPostByPostIdQuery,
   usePostSignInMutation,
   usePostSignUpMutation,
   useGetAllCategoryQuery,
   useGetVotesByVotePostIdQuery,
    useGetPublicPostsQuery,
    useGetJournalPostsQuery,
    useGetAnonymousPostsByProfileIdQuery,
    usePostPostCategoryMutation,
   useToggleVoteMutation} = apis


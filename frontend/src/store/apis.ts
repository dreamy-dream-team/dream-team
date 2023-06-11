import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {PartialProfile, Profile, SignIn} from "../shared/interfaces/Profile.tsx";
import {PartialPost} from "../shared/interfaces/Post.tsx";
import Post from "./posts.ts";
import {Category} from "../shared/interfaces/Category.tsx";

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
    reducerPath:"api",
    baseQuery: fetchBaseQuery({baseUrl:'/apis'}),
    tagTypes: ["Post"],
    endpoints: (builder) => ({

        getVotesByVotePostId:builder.query<Vote[], string>
        ({
            query: (postId) => `/vote/votePostId/${postId}`,
            transformResponse:transformResponse<Vote[]>,
            providesTags: ['Post']
        }),
        toggleVote: builder.mutation<ClientResponse, PartialVote> ({
            transformResponse:transformMutationResponses,
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
        postSignIn: builder.mutation<ClientResponseForSignIn, SignIn> ({
            query (body: SignIn) {
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
        PostSignUp: builder.mutation<ClientResponse, PartialProfile>({
            transformResponse: transformMutationResponses,
            transformErrorResponse: transformErrorResponses,
            query (body: PartialProfile) {
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

function transformResponse<T> (response: ServerResponse): T {
    return response.data as T
}

export const {useGetAllPostsPublishedQuery,
    usePostPostMutation,
    useGetAllPostsByPostCategoryQuery,
    useGetProfileByProfileIdQuery,
    usePostSignInMutation,
    usePostSignUpMutation,
    useGetAllCategoryQuery,
    useGetVotesByVotePostIdQuery,
    useToggleVoteMutation} = apis
console.log(useGetAllPostsPublishedQuery)
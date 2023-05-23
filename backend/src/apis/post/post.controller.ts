import {Status} from "../../utils/interfaces/Status";
import {
    deletePostByPostId,
    insertPost,
    Post,
    selectAllPosts, selectAllPostsByPostIsPublished, selectPostByPostId, selectPostsByPostProfileHandleIsVisible,
    selectPostsByPostProfileId, updatePostByPostId
} from "../../utils/models/Post";
import {NextFunction, Request, response, Response} from "express";
import {Profile} from "../../utils/models/Profile";

export async function getAllPostsController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllPosts()
        const status: Status = { status: 200, message: null, data }
        return response.json(status)
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getPostsByPostIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const{postId} = request.params
        const data = await selectPostByPostId(postId)
        return response.json({status: 200, message: null, data })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getPostsByPostProfileIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {postProfileId} = request.params
        const data = await selectPostsByPostProfileId(postProfileId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}

export async function getPostsByPostProfileHandleIsVisibleController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {postProfileHandleIsVisible} = request.params
        const data = await selectPostsByPostProfileHandleIsVisible(Boolean(postProfileHandleIsVisible))
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: null,
            data: null
        })
    }
}

export async function getPostsByPostIsPublishedController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {postIsPublished} = request.params
        const data = await selectAllPostsByPostIsPublished(Boolean(postIsPublished))
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: null,
            data: null
        })
    }
}

export async function postPost (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { postTitle, postContent } = request.body
        const profile: Profile = request.session.profile as Profile
        const postProfileId: string = profile.profileId as string

        const post: Post = {
            postId: null,
            postProfileId,
            postContent,
            postTitle,
            postDateTime: null,
            postIsPublished: true,
            postProfileHandleIsVisible: true
        }
            const preformUpdate = async(post: Post): Promise<Response> => {
                const previousPost: Post = await selectPostByPostId(post.postId as string) as Post
                const newPost: Post = { ...previousPost, ...post}
                await updatePostByPostId(newPost)
                return response.json ({ status: 200, data: null, message: 'post successfully updated'})
            }
            const updateFailed = (message: string): Response => {
            return response.json({
                status: 400,
                data: null,
                message
            })
            }

        const result = await insertPost(post)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    } catch (error) {
        return response.json({
            status: 500,
            message: 'Error creating post try again later.',
            data: null
        })
    }
}

export async function deletePostController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {postId} = request.params
        const profile = request.session.profile as Profile
        const postProfileId: string = profile.profileId as string
        const {postContent, postDateTime, postProfileHandleIsVisible, postIsPublished, postTitle} = request.body
        const post: Post|null = await selectPostByPostId(postId)

        if (post === null){
            return response.json({status: 404, data: null, message: 'post is not found'})
        }
        if (post.postProfileId !== postProfileId) {
            return response.json({status: 401, data: null, message: 'you are not allowed to perform this action'})
        }
        const result = await deletePostByPostId(post)
        return response.json({status: 200, data: null, message: 'your post was deleted successfully'})
    } catch (error) {
        return response.json({
            status: 500,
            message: 'Error could not delete',
            data: null
        })
    }
}

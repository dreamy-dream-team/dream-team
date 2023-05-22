import {Status} from "../../utils/interfaces/Status";
import {
    insertPost,
    Post,
    selectAllPosts,
    selectPostsByPostId,
    selectPostsByPostProfileId
} from "../../utils/models/Post";
import {NextFunction, Request, Response} from "express";
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
        const data = await selectPostsByPostId(postId)
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

//TODO ask about post is published and post profile handle is visible
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

//TODO do we need a delete button/toggler?

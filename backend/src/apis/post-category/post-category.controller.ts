import {Status} from "../../utils/interfaces/Status";
import {NextFunction, Request, Response} from "express";
import {
    deletePostCategory, insertPostCategory,
    PostCategory,
    selectPostCategoryByCategoryId, selectPostCategoryByPrimaryKey
} from "../../utils/models/Post-Category";
import {Profile} from "../../utils/models/Profile";
import {selectPostsByPostId} from "../../utils/models/Post";

export async function getPostCategoryByCategoryId (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {postCategoryId} = request.params
        const data = await selectPostCategoryByCategoryId(postCategoryId)
        return response.json({
            status: 200,
            message: null,
            data
        })
    }catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getPostCategoryByPrimaryKey (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {postCategoryCategoryId, postCategoryPostId} = request.params

        const data = await selectPostCategoryByPrimaryKey(postCategoryCategoryId, postCategoryPostId)
        return response.json({
            status: 200,
            message: null,
            data
        })
    }catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}

export async function postPostCategoryController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {postCategoryCategoryId, postCategoryPostId} = request.body
        const postCategory: PostCategory|null = {
            postCategoryCategoryId, postCategoryPostId
        }
        const profile: Profile = request.session.profile as Profile
        const profileId: string = profile.profileId as string
        const post = await selectPostsByPostId(postCategoryPostId)
        if (post?.postProfileId !== profileId) {
            return response.json({status:401, data: null, message: 'you are not allowed to perform this action'})
        }
        const result = await insertPostCategory(postCategory)
        const status : Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    } catch (error) {
        console.error(error)
        return response.json({
            status: 500,
            message: 'error creating post category',
            data: null
        })
    }
}


export async function deletePostCategoryController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {postCategoryCategoryId, postCategoryPostId} = request.params
        const profile: Profile = request.session.profile as Profile
        const profileId: string = profile.profileId as string
        const postCategory: PostCategory|null = await selectPostCategoryByPrimaryKey(postCategoryCategoryId, postCategoryPostId)

        if (postCategory === null){
            return response.json({status: 404, data: null, message: 'post category is not found'})
        }
        const post = await selectPostsByPostId(postCategoryPostId)
        if (post?.postProfileId !== profileId) {
            return response.json({status:401, data: null, message: 'you are not allowed to perform this action'})
        }
        const result = await deletePostCategory(postCategory)
        return response.json({status: 200, data: null, message: 'your post category was removed successfully'})
    } catch (error) {
        return response.json({status: 500, message: 'error could not delete', data: null})
    }
}
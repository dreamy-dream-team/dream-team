import {Status} from "../../utils/interfaces/Status";
import {NextFunction, Request, Response} from "express";
import {deletePostCategoryByPostCategoryId} from "../../utils/models/Post-Category";

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

export async function deletePostCategoryController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {postCategoryId} = request.params
        const {postCategoryId, postCategoryName} = request.body
        const postCategory: PostCategory|null = await selectPostCategoryByPostCategoryId(postCategoryId)

        if (postCategory === null){
            return response.json({status: 404, data: null, message: 'post category is not found'})
        }
        if (postCategory.postCategoryId !== postCategoryId) {
            return respone.json({status:401, data: null, message: 'you are not allowed to perform this action'})
        }
        const result = await deletePostCategoryByPostCategoryId(postCategory)
        return response.json({status: 200, data: null, message: 'your post category was removed successfully'})
    } catch (error) {
        return response.json({status: 500, message: 'error could not delete', data: null})
    }
}
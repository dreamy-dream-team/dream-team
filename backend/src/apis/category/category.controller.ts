import {
    Category, insertCategory,
    selectAllCategories, selectCategoriesByPostCategoryPostId,
    selectCategoryByCategoryId
} from "../../utils/models/Category";
import {Status} from "../../utils/interfaces/Status";
import {NextFunction, Request, Response} from 'express'

export async function getCategoryByCategoryId (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try{
        const {categoryId} = request.params
        const data = await selectCategoryByCategoryId(categoryId)
        return response.json ({ status: 200, message: null, data })
    }catch(error){
        return (response.json ({ status: 500, message: '', data: null }))
    }
}

export async function getAllCategoriesController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllCategories()
        return response.json({status: 200, data, message: null})
    } catch (error: any) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

export async function getCategoriesByPostCategoryPostIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { postCategoryPostId } = request.params
        const data = await selectCategoriesByPostCategoryPostId(postCategoryPostId)
        return response.json({status: 200, data, message: null})
    } catch (error: any) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

export async function postCategoryController (request: Request, response: Response): Promise<Response<Status>> {
    try{
        const {categoryName} = request.body
        const category: Category = {
            categoryId: null,
            categoryName
        }
        const result = await insertCategory(category)
        const status: Status = { status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    }catch (error){
        return response.json({
            status: 500,
            message: 'Error Creating category try again later.',
            data: null
        })
    }
}
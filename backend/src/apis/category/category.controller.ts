import {Category} from "../../utils/models/Category";


export async function postCategoryController (request: Request, response: Response): Promise<Response> {
    try{
        const { categoryId} = request.params
        const { categoryName } = request.body
        const category = request.session.category as Category
        const categoryIdFromSession = category.categoryId as string

        const preformUpdate = async ()

    }catch{
        return()
    }
}

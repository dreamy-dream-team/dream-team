import {Category, selectCategoryByCategoryId, updateCategory} from "../../utils/models/Category";
import {Status} from "../../utils/interfaces/Status";


export async function putCategoryController (request: Request, response: Response): Promise<Response> {
    try{
        const { categoryId } = request.params
        const { categoryName } = request.body
        const category = request.session.category as Category
        const categoryIdFromSession = category.categoryId as string

        const preformUpdate = async (partialCategory: PartialCategory): Promise<Response> => {
            const previousCategory: Category = await selectCategoryByCategoryId(partialCategory.categoryId as string) as Category
            const newCategory: Category = {...previousCategory, ...partialCategory}
            await updateCategory (newCategory)
            return response.json ({ status: 200, data: null, message: 'Category successfully updated'})
        }
        const updateFailed = (message: string): Response => {
            return response.json ({ status: 400, data: null, message})
        }

        return categoryId === categoryIdFromSession
        ? await preformUpdate ({ categoryId, categoryName })
        :updateFailed ('you are not allowed to preform this action')
    } catch (error: any) {
        return(response.json({ status: 400, data: null, message: error.message}))
    }
}

export async function getCategoryByCategoryId (request: Request, response: Response): Promise<Response> {
    try{
        const {categoryId} = request.params
        const mySqlResult = await selectCategoryByCategoryId (categoryId)
        const data = mySqlResult ?? null
        const status: Status = { status: 200, data, message: null }
        return response.json (status)
    }catch(error: any){
        return (response.json ({ status: 400, data: null, message: error.message }))
    }
}

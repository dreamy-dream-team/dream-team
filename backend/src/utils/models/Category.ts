import {sql} from "../database.utils";


export interface Category {
    categoryId : string | null
    categoryName: string
}

export async function insertCategory (category: Category): Promise<string> {
    const {categoryId, categoryName} = category
    await sql `INSERT INTO category (category_id, category_name) VALUES(gen_random_uuid(), ${categoryName})`
    return 'category created successfully'
}

export async function selectCategoryByCategoryId (categoryId: string): Promise<Category|null> {
    const result =  await sql<Category[]>`SELECT category_id, category_name FROM category WHERE category_id = ${categoryId}`
    return result?.length === 1 ? result[0] :null
}

export async function selectAllCategories (): Promise<Category[]> {
    return <Category[]> await sql `SELECT category_id, category_name FROM category ORDER BY post_date_time DESC`
}

export async function deleteCategory
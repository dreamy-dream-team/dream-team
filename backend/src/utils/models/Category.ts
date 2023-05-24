import {sql} from "../database.utils";

export interface PartialCategory{
    categoryId: string;
    categoryName: string;
}


export interface Category {
    categoryId : string | null
    categoryName: string
}

export async function insertCategory (category: Category): Promise<string> {
    const {categoryName} = category
    await sql `INSERT INTO category (category_id, category_name) VALUES(gen_random_uuid(), ${categoryName})`
    return 'category created successfully'
}

export async function selectCategoryByCategoryId (categoryId: string): Promise<Category|null> {
    const result =  await sql<Category[]>`SELECT category_id, category_name FROM category WHERE category_id = ${categoryId}`
    return result?.length === 1 ? result[0] :null
}

export async function selectAllCategories (): Promise<Category[]> {
    return sql <Category[]> `SELECT category_id, category_name FROM category`
}

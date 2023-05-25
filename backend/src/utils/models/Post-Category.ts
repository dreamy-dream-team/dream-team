import {sql} from "../database.utils";

//TODO ASK INSTRUCTORS
// export async function insertPostCategory (postCategory: PostCategory): Promise<string> {
//     const {postCategoryId, postCategoryName} = postCategory
//     await sql `INSERT INTO  post_category (post_category_category_id, post_category_post_id VALUES${postCategoryId}, ${postCategoryName}) `
//     return 'post category created successfully'
// }

export async function selectPostCategoryByPostCategoryId (postCategoryId: string): Promise<PostCategory[]> {
    return <PostCategory[]> await sql `SELECT post_category_category_id, post_category_post_id FROM post_category WHERE post_category_category_id = ${postCategoryId}`
}

export async function deletePostCategoryByPostCategoryId (postCategory: PostCategory): Promise<string> {
    const {postCategoryId, postCategoryName} = postCategory
    await sql`DELETE FROM "post_category" WHERE post_category_category_id = ${postCategoryId} AND post_category_post_id = ${postCategoryId}`
    return 'Post category deleted successfully'
}
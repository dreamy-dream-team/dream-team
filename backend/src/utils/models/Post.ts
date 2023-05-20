import {sql} from "../database.utils";


export interface Post {
    postId: string|null
    postProfileId: string
    postContent: string
    postDateTime: Date|null
    postProfileHandleIsVisible: boolean
    postIsPublished: boolean
    postTitle: string
}

export async function insertPost (post: Post): Promise<string> {
    const {postProfileId, postContent, postDateTime, postProfileHandleIsVisible, postIsPublished, postTitle} = post
    await sql `INSERT INTO post (post_id, post_profile_id, post_content, post_date_time, post_profile_handle_is_visible, post_is_published, post_title VALUES(gen_random_uuid(), ${postProfileId}, ${postContent}, NOW(), ${postProfileHandleIsVisible}, ${postIsPublished}, ${postTitle})`
    return 'post created successfully'
}


// TODO ask instructors about the oder by in this function
export async function selectAllPosts (): Promise<Post[]> {
     return <post[]> await sql `SELECT post_id, post_profile_id, post_content, post_date_time, post_profile_handle_is_visible, post_title FROM post`
}
// TODO ask how we would select all by vote count

export async function selectPostsByPostId (postId: string): Promise<Post|null> {
    const result = <Post[]> await sql`SELECT post_id, post_profile_id, post_content, post_date_time, post_profile_handle_is_visible, post_title FROM post WHERE post_id = ${postId}`
    return result?.length === 1 ? result[0] : null
}

export async function selectPostsByPostProfileId (postProfileId: string): Promise<Post[]> {
    return <Post[]> await sql`SELECT post_id, post_profile_id, post_content, post_date_time, post_profile_handle_is_visible, post_title FROM post WHERE post_profile_id = ${postProfileId}`
}

export async function deletePostbyPostId (post: Post): Promise<string> {
    const {postId, postProfileId} = post
    await sql`DELETE FROM "post" WHERE post_id = ${postId} AND post_profile_id ${postProfileId}`
    return 'Post deleted successfully'
}

// TODO ask how we would write this and select from postIsPublished
// export async function selectPostsByPostProfileHandleIsVisible (postProfileHandleIsVisible: boolean) Promise<Post[]> {
//     return = <Post[]> await sql`SELECT post_id, post_profile_id, post_content, post_date_time, post_profile_handle_is_visible, post_title FROM post WHERE post_profile_handle_is_visible = ${selectPostsByPostProfileHandleIsVisible}`
// }


import {sql} from "../database.utils";
import e from "express";

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
    await sql `INSERT INTO post (post_id, post_profile_id, post_content, post_date_time, post_profile_handle_is_visible, post_is_published, post_title) VALUES (gen_random_uuid(), ${postProfileId}, ${postContent}, NOW(), ${postProfileHandleIsVisible}, ${postIsPublished}, ${postTitle})`
    return 'post created successfully'
}

export async function selectAllPosts (): Promise<Post[]> {
     return sql <Post[]> `SELECT post_id, post_profile_id, post_content, post_date_time, post_profile_handle_is_visible, post_title FROM post ORDER BY post_date_time DESC`
}

export async function selectAllPostsByVote (): Promise<Post[]> {
    return sql <Post[]> `SELECT post_id, post_profile_id, post_content, post_date_time, post_profile_handle_is_visible, post_title FROM vote INNER JOIN vote_value ON post.postId = vote.votePostId WHERE (SELECT COUNT(vote_value) FROM vote WHERE vote_value ORDER BY COUNT(vote_value) DESC)`
}

export async function selectPostByPostId (postId: string): Promise<Post|null> {
    const result = <Post[]> await sql`SELECT post_id, post_profile_id, post_content, post_date_time, post_profile_handle_is_visible, post_title FROM post WHERE post_id = ${postId}`
    return result?.length === 1 ? result[0] : null
}

export async function selectPostsByPostProfileId (postProfileId: string): Promise<Post[]> {
    return <Post[]> await sql`SELECT post_id, post_profile_id, post_content, post_date_time, post_profile_handle_is_visible, post_title FROM post WHERE post_profile_id = ${postProfileId}`
}

export async function updatePostByPostId (post: Post): Promise<string> {
    const {postId, postProfileId, postContent, postDateTime, postIsPublished, postProfileHandleIsVisible, postTitle} = post
    await sql`UPDATE post SET post_content = ${postContent}, post_date_time = ${postDateTime}, post_is_published = ${postIsPublished}, post_profile_handle_is_visible = ${postProfileHandleIsVisible}, post_title = ${postTitle} WHERE post_id = ${postId} AND post_profile_id = ${postProfileId}`
    return 'post updated successfully'
}

export async function deletePostByPostId (post: Post): Promise<string> {
    const {postId} = post
    await sql`DELETE FROM "post" WHERE post_id = ${postId}`
    return 'Post deleted successfully'
}

export async function selectPostsByPostProfileHandleIsVisible (postProfileId: string): Promise<Post[]> {
    return sql<Post[]>`SELECT post_id, post_profile_id, post_content, post_date_time, post_is_published, post_profile_handle_is_visible, post_title FROM post WHERE post_profile_handle_is_visible = true AND post_profile_id = ${postProfileId} AND post_is_published = true`
}

export async function selectAllPostsByPostIsPublished (postIsPublished: boolean): Promise<Post[]> {
    return sql <Post[]>`SELECT post_id, post_profile_id, post_content, post_date_time, post_is_published, post_profile_handle_is_visible, post_title FROM post WHERE post_is_published = ${postIsPublished}`
}


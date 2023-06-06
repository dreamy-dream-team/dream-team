export interface Post {
    postId: string|null
    postProfileId: string
    postContent: string
    postDateTime: Date|null
    postProfileHandleIsVisible: boolean
    postIsPublished: boolean
    postTitle: string
}
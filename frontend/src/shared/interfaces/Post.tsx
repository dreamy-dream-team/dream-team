export interface Post extends PartialPost{
    postId: string|null
    postDateTime: string
}

export interface PartialPost {
    postProfileId: string
    postContent: string
    postProfileHandleIsVisible: boolean
    postIsPublished: boolean
    postTitle: string
}
export interface Post extends PartialPost{
    postId: string|null
}

export interface PartialPost {
    postProfileId: string
    postContent: string
    postDateTime: Date|null
    postProfileHandleIsVisible: boolean
    postIsPublished: boolean
    postTitle: string
}
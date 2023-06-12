export interface Post extends PartialPost{
    postId: string
    postDateTime: string
}

export interface PartialPost {
    postProfileId: string
    postContent: string
    postProfileHandleIsVisible: boolean
    postIsPublished: boolean
    postTitle: string
}
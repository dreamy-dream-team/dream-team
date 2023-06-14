export interface Vote {
    voteProfileId: string | null
    votePostId: string
    voteDateTime: Date | null
    voteValue: boolean
}

export interface PartialVote {
    votePostId : string
    voteValue: boolean
}
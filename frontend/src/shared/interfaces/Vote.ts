export interface Vote {
    voteProfileId: string | null
    votePostId: string | null
    voteDateTime: Date | null
    voteValue: boolean
}

export interface PartialVote {
    votePostId : string | null
}
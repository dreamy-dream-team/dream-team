import {NextFunction, Request, Response} from "express";
import {deleteVote, insertVote, selectVoteByVoteId, selectVotesByVotePostId, Vote} from "../../utils/models/Vote";
import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/models/Profile";

export async function getVotesByVotePostId (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { votePostId } = request.params
        const data = await selectVotesByVotePostId(votePostId)
        console.log(data)
        return response.json({
            status: 200,
            message: null,
            data
        })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getVoteByPrimaryKeyController (request: Request, response: Response) {
    try {
        const { voteProfileId, votePostId } = request.params
        const data = await selectVoteByVoteId(votePostId, voteProfileId)
        console.log(data)
        return response.json({
            status: 200,
            message: null,
            data
        })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function toggleVoteController (request: Request, response: Response): Promise<Response<string>> {
    try {
        const { votePostId, voteValue } = request.body
        const profile = request.session.profile as Profile
        const voteProfileId = profile.profileId as string

        const vote: Vote = {
            voteProfileId,
            votePostId,
            voteDateTime: null,
            voteValue
        }

        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        const selectedVote: Vote|null = await selectVoteByVoteId(votePostId, voteProfileId)
        if (selectedVote === null) {
            status.message = await insertVote(vote)
        } else {
            status.message = await deleteVote(selectedVote)
        }

        return response.json(status)
    } catch (error: any) {
        return (response.json({
            status: 500,
            data: null,
            message: error.message
        }))
    }
}
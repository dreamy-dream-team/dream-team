import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "./store.ts";
import {httpConfig} from "../shared/utils/http-config.ts";

interface VotesState {
    [votePostId: string]: any[]
}

interface AddVotesPayload {
    votePostId: string
    data: any
}

interface RemoveVotePayload {
    votePostId: string
    voteProfileId: string
}

const slice = createSlice ({
    name: 'votes',
    initialState: {} as VotesState,
    reducers: {
        addVotes: (state, action: PayloadAction<AddVotesPayload>) => {
            state[action.payload.votePostId] = action.payload.data
        },
        removeVote: (state, action: PayloadAction<RemoveVotePayload>) => {
            const votes = state[action.payload.votePostId]
            const index = votes.findIndex((votes) => action.payload.votePostId === votes.voteProfileId)
            if (index !== -1) {
                votes.splice(index, 1)
            }
        },
    },
})

export const { addVotes, removeVote } = slice.actions

export const fetchVotesByVotePostId = (votePostId: string) => async (dispatch: AppDispatch) => {
    const { data } = await httpConfig.get(`/apis/vote/votePostId/${votePostId}`)
    const payload = { votePostId, data }
    dispatch(addVotes(payload))
}

export default slice.reducer
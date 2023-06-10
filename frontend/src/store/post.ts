import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../shared/utils/http-config.ts";
import {fetchProfileByProfileId} from "./profiles.ts";
import {AppDispatch} from "./store.ts";
import {fetchVotesByVotePostId} from "./votes.ts";



const slice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        //TODO ask George about setAllPosts

        setAllPosts: (posts, action) => {
            return action.payload
        },
    },
});

export const { setAllPosts } = slice.actions

export const fetchAllPosts = () => async (
    dispatch: AppDispatch,
) => {
    const { data } = await httpConfig.get('/apis/post/')
    dispatch(setAllPosts(data))
    const profileIdSet = new Set<string>()
    for (const post of data) {
        const { postId, postProfileId } = post
        if (!profileIdSet.has(postProfileId)) {
            profileIdSet.add(postProfileId)
            dispatch(fetchProfileByProfileId(postProfileId))
        }
        dispatch(fetchVotesByVotePostId(postId))
    }
}
export default slice.reducer
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "./store.ts";
import {httpConfig} from "../shared/utils/http-config.ts";
interface ProfileState {
    [profileId: string]: any
}

interface SetProfilePayload {
    profileId: string
    data: any
}

const slice = createSlice ({
    name: 'profiles',
    initialState: {} as ProfileState,
    reducers: {
        setProfile: (profiles, action: PayloadAction<SetProfilePayload>) => {
            profiles[action.payload.profileId] = action.payload.data
        },
    },
})

export const { setProfile } = slice.actions

export const fetchProfileByProfileId = (profileId: string) => async (
    dispatch: AppDispatch,
    getState: () => RootState
) => {
    const state = getState()
    const profiles = state.profiles

    if (profiles[profileId] === undefined) {
        try {
            const { data } = await httpConfig(`/apis/profile/${profileId}`)
            dispatch(setProfile({ profileId, data }))
        } catch (error) {
            console.error('Error fetching profile', error)
        }


    }
}

export default slice.reducer
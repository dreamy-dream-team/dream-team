import {RootState, useAppDispatch, useAppSelector} from "../../store/store.ts";
import {fetchAuth} from "../../store/auth.ts";
import {Profile} from "../interfaces/Profile.tsx";
import React from "react";

export function useJwtToken (): { profile: Profile | null, isLoading: boolean } {

    const [isLoading, setIsLoading]: [boolean, React.Dispatch<boolean>] = React.useState(true)
    const auth = useAppSelector((state: RootState) => {

        return state.auth
    })
 console.log(auth)
    const profile: Profile | null = auth
        ? {
            profileId: auth.profileId,
            profileEmail: auth.profileEmail,
            profileHandle: auth.profileHandle,
            profileCreationDate: auth.profileCreationDate
        }
        : null

    const dispatch: any = useAppDispatch()

    const initialEffects = () => {
        async function getAuthFromRedux () {
            await dispatch(fetchAuth())
            setIsLoading(false)

        }

        getAuthFromRedux().catch(onerror => {console.error(onerror)})
    }

    React.useEffect(initialEffects, [dispatch])
    return { profile, isLoading }

}
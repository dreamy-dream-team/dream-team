import {sql} from "../database.utils";

export interface PartialProfile {
    profileId: string|null
    profileCreateDate: string|null
    profileEmail: string
    profileHandle: string
    profileHandleIsVisible: boolean

}
export interface Profile {
    profileId: string|null
    profileActivationToken: string|null
    profileCreateDate: string|null
    profileEmail: string
    profileHandle: string
    profileHandleIsVisible: boolean
    profileHash: string
}


export async function insertProfile (profile: Profile) : Promise<string> {
    const {profileActivationToken, profileCreateDate, profileEmail, profileHandle, profileHandleIsVisible, profileHash} = profile
    console.log(profile)
    await sql `INSERT INTO profile(profile_id, profile_activation_token, profile_create_date, profile_email, profile_handle, profile_handle_is_visible, profile_hash) VALUES (gen_random_uuid(), ${profileActivationToken}, now(), ${profileEmail}, ${profileHandle}, ${profileHandleIsVisible}, ${profileHash})`
    return 'Profile Successfully Created'
}

export async function selectProfileByProfileEmail (profileEmail: string): Promise<Profile|null>{
    const result = <Profile[]>await sql`SELECT profile_id, profile_activation_token, profile_create_date, profile_email, profile_handle, profile_handle_is_visible, profile_hash FROM profile WHERE profile_email = ${profileEmail}`
    return result?.length === 1 ? result[0] : null
}
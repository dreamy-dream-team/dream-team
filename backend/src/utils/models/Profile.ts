import {sql} from "../database.utils";

export interface PartialProfile {
    profileId: string|null
    profileCreateDate: string|null
    profileEmail: string
    profileHandle: string
}

// profileHandleIsVisible: boolean
export interface Profile {
    profileId: string|null
    profileActivationToken: string|null
    profileCreateDate: string|null
    profileEmail: string
    profileHandle: string
    profileHash: string
}


export async function insertProfile (profile: Profile) : Promise<string> {
    const {profileActivationToken, profileCreateDate, profileEmail, profileHandle, profileHash} = profile
    await sql `INSERT INTO profile(profile_id, profile_activation_token, profile_create_date, profile_email, profile_handle, profile_hash) VALUES (gen_random_uuid(), ${profileActivationToken}, now(), ${profileEmail}, ${profileHandle}, ${profileHash})`
    return 'Profile Successfully Created'
}

export async function selectProfileByProfileActivationToken (profileActivationToken: string): Promise<Profile|null> {
    const result = <Profile[]>await sql `SELECT profile_id, profile_activation_token, profile_create_date, profile_email, profile_handle FROM profile WHERE profile_activation_token = ${profileActivationToken}`
    return result?.length === 1 ? result[0] : null
}

export async function selectProfileByProfileEmail (profileEmail: string): Promise<Profile|null>{
    const result = <Profile[]>await sql`SELECT profile_id, profile_activation_token, profile_create_date, profile_email, profile_handle, profile_hash FROM profile WHERE profile_email = ${profileEmail}`
    return result?.length === 1 ? result[0] : null
}

export async function selectPartialProfileByProfileId(profileId: string): Promise<Profile|null> {
    const result = <Profile[]>await sql`SELECT profile_id, profile_create_date, profile_email, profile_handle FROM profile WHERE profile_id = ${profileId}`
    return result?.length === 1 ? result[0] : null
}

export async function selectWholeProfileByProfileId(profileId: string): Promise<Profile|null> {
    const result = <Profile[]>await sql`SELECT profile_id, profile_activation_token, profile_create_date, profile_email, profile_handle, profile_hash FROM profile WHERE profile_id = ${profileId}`
    return result?.length === 1 ? result[0] : null
}

export async function updateProfile (profile: Profile): Promise<string> {
    const {profileId, profileActivationToken, profileCreateDate, profileEmail, profileHandle, profileHash} = profile
    await sql `UPDATE profile SET profile_activation_token = ${profileActivationToken}, profile_email = ${profileEmail}, profile_handle = ${profileHandle}, profile_hash = ${profileHash} WHERE profile_id = ${profileId}`
    return 'Profile successfully updated'
}














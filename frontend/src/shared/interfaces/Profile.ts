export interface Profile extends PartialProfile{
    profileId: string | null
}

export interface PartialProfile {
    profileEmail: string
    profileHandle: string | null
    profilePassword: string
    profilePasswordConfirm: string
}
export interface SignIn {
    profileEmail: string,
    profilePassword: string
}
export interface SignUp extends PartialProfile{
    profilePassword: string,
    profilePasswordConfirm: string
}
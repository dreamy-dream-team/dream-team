export interface Profile extends PartialProfile{
    profileId: string;
}

export interface PartialProfile {
    profileEmail: string
    profileHandle: string
    profilePassword: string
    profilePasswordConfirm: string
}

export interface SignIn {
    profileEmail: string,
    profilePassword: string
}
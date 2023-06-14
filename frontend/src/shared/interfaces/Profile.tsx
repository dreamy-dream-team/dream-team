export interface Profile extends SignUpProfile{
    profileId: string;
}

export interface SignUpProfile {
    profileEmail: string
    profileHandle: string
    profilePassword: string
    profilePasswordConfirm: string
}

export interface PartialProfile{
    profileId: string;
    profileEmail: string
    profileHandle: string
}

export interface SignIn {
    profileEmail: string,
    profilePassword: string
}
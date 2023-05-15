import {Schema} from "express-validator";

export const signupValidator: Schema = {
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email.'
        },
        trim: true
    },
    profileHandle: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Profile Handle must be between 7 and 54 characters.',
            options: {min: 1, max: 54}
        }
    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least 8 characters',
            options: {min: 8}
        },
        trim: true,
        escape: true
    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'Password must match',
            options: {min: 8}
        },
        trim: true,
        escape: true
    },
}
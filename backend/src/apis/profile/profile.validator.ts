import {Schema} from "express-validator";

export const profileValidator: Schema = {
    profileId: {
        isUUID: {
            errorMessage: 'please provide a valid profileId'
        }
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },
    profileHandle: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileHandle must be between seven and fifty four characters',
            options: { min: 7, max: 54 }
        }
    }
}
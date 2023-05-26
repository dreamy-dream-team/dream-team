import {Schema} from "express-validator";

export const voteValidator: Schema = {
    voteProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid voteProfileId'
        }

    },
    votePostId: {
        isUUID: {
            errorMessage: 'please provide a valid votePostId'
        }
    },
    voteValue: {
    isBoolean: true
    }
}
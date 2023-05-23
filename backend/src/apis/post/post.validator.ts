import {Schema} from "express-validator";


export const postValidator: Schema = {
    postProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid PostProfileId'
        }

},

postContent: {
    isLength: {
        errorMessage: 'a post cannot be longer than 1,024 characters',
        options: {max: 1024}
    },
    trim: true,
    escape: true
},

postDateTime: {
    toDate: true
},

postProfileHandleIsVisible: {
    isBoolean: true,
},

postIsPublished: {
        isBoolean: true,
},

postTitle: {
        isLength: {
            errorMessage: 'a title cannot be longer than 512 characters',
            options: {max: 512}
        },
        trim: true,
}
}
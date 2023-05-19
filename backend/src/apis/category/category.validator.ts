import {Schema} from "express-validator";

export const categoryValidator: Schema = {
    categoryId: {
        isUUID: {
            errorMessage: 'please provide a valid categoryId'
        }
    },
    categoryName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'category name must be between seven and thirty two characters',
            options: { min: 1, max: 32 }
        }
    }
}
import {Schema} from "express-validator";

export const categoryValidator: Schema = {

    categoryName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'category name must be between seven and thirty two characters',
            options: { min: 1, max: 32 }
        }
    }
}
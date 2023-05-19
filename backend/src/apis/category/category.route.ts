import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {getProfileByProfileId} from "../profile/profile.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {checkSchema} from "express-validator";
import {categoryValidator} from "./category.validator";
import {Router} from "express";


export const CategoryRoute: Router = Router()
CategoryRoute.route('/')
    .post(putCategoryController)

CategoryRoute.route('/:categoryId')
    .get(
        asyncValidatorController({
            check('categoryId', 'please provide a valid categoryId').isUUID()
        })
        , getCategoryByCategoryId()
    )
    .put(asyncValidatorController(checkSchema(categoryValidator)), postCategoryController)



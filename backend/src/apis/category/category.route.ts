import {Router} from "express";
import {getCategoryByCategoryId, putCategoryController} from "./category.controller";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {checkSchema} from "express-validator";
import {categoryValidator} from "./category.validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

export const CategoryRoute: Router = Router()
CategoryRoute.route('/')
    .post(putCategoryController)

CategoryRoute.route('/:categoryId')
    .get(
        asyncValidatorController({
            check('categoryId', 'please provide a valid categoryId').isUUID()
        })
        , getCategoryByCategoryId
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(categoryValidator)), putCategoryController)



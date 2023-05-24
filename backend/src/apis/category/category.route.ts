import {Router} from "express";
import {
    deleteCategoryController,
    getAllCategoriesController,
    getCategoryByCategoryId,
    putCategoryController
} from "./category.controller";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {categoryValidator} from "./category.validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

export const CategoryRoute: Router = Router();
CategoryRoute.route('/')
    .get(getAllCategoriesController)
    .post(putCategoryController)

CategoryRoute.route('/:categoryId')
    .get(
        asyncValidatorController([
            check('categoryId', 'please provide a valid categoryId').isUUID()
        ]),
        getCategoryByCategoryId
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(categoryValidator)), putCategoryController)
    .delete(isLoggedIn, asyncValidatorController([
        check('categoryId', 'please provide a valid categoryId').isUUID()
    ]), deleteCategoryController);


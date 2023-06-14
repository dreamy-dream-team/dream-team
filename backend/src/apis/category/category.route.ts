import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {
    getAllCategoriesController,
    getCategoriesByPostCategoryPostIdController,
    getCategoryByCategoryId,
    postCategoryController
} from "./category.controller";
import {check, checkSchema} from "express-validator";
import {categoryValidator} from "./category.validator";

const router = Router()

router.route('/')
.get(getAllCategoriesController)
.post(asyncValidatorController(checkSchema(categoryValidator)), postCategoryController)

router.route('/categoryId/:categoryId')
    .get(asyncValidatorController([check('categoryId', "please provide valid category Id").isUUID()]), getCategoryByCategoryId)

router.route('/postCategoryPostId/:postCategoryPostId')
    .get(asyncValidatorController([check('postCategoryPostId', "please provide valid post category Id").isUUID()]), getCategoriesByPostCategoryPostIdController)
export default router
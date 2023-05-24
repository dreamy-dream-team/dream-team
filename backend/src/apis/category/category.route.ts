import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {getAllCategoriesController, getCategoryByCategoryId, postCategoryController} from "./category.controller";
import {checkSchema} from "express-validator";
import {categoryValidator} from "./category.validator";

const router = Router()

router.route('/')
.get(getAllCategoriesController)
.post(asyncValidatorController(checkSchema(categoryValidator)), postCategoryController)
.get(getCategoryByCategoryId)

export default router
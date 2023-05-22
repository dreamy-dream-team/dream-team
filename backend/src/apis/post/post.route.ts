import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {
    getAllPostsController,
    getPostsByPostIdController,
    getPostsByPostProfileIdController,
    postPost
} from "./post.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {postValidator} from "./post.validator";


const router = Router()
router.route('./postid').get(asyncValidatorController([
    check('postId', 'please provide a valid postId').isUUID()
]), getPostsByPostIdController)

router.route('/postProfileId/:postProfileId').get(asyncValidatorController([
    check('postProfileId', 'please provide a valid postProfileId').isUUID()
]), getPostsByPostProfileIdController)

router.route('/')
    .get(getAllPostsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema((postValidator))) ,postPost)

export default router
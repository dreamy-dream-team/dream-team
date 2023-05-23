import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {
    getAllPostsController,
    getPostsByPostIdController,
    getPostsByPostProfileIdController,
    getPostsByPostProfileHandleIsVisibleController, getPostsByPostIsPublishedController,
    postPost, deletePostController
} from "./post.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {postValidator} from "./post.validator";


const router = Router()
router.route('./postId').get(asyncValidatorController([
    check('postId', 'please provide a valid postId').isUUID()
]), getPostsByPostIdController)

router.route('/postProfileId/:postProfileId').get(asyncValidatorController([
    check('postProfileId', 'please provide a valid postProfileId').isUUID()
]), getPostsByPostProfileIdController).get(asyncValidatorController, getPostsByPostIsPublishedController).put(isLoggedIn, asyncValidatorController(checkSchema(postValidator)))


router.route('/')
    .get(getAllPostsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema((postValidator))) ,postPost)

router.route('/:postId')
    .get(asyncValidatorController([check('postId', 'please provide a valid post id').isUUID()]), getPostsByPostIdController)
    .delete(isLoggedIn, asyncValidatorController(checkSchema((postValidator))) ,deletePostController)

export default router
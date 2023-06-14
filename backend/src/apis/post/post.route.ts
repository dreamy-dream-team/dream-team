import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {
    getAllPostsController,
    getPostsByPostIdController,
    getPostsByPostProfileIdController,
    getPostsByPostProfileHandleIsVisibleController, getPostsByPostIsPublishedController,
    postPost, deletePostController, putPostController, getAllPostsByPostCategoryIdController
} from "./post.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {postValidator} from "./post.validator";


const router = Router()

// GET, DELETE, or UPDATE post by post ID
router.route('/:postId')
    .get(asyncValidatorController([
    check('postId', 'please provide a valid postId').isUUID()]), getPostsByPostIdController)
    .delete(isLoggedIn, asyncValidatorController([check('postId', 'please provide valid postId')]), deletePostController)
    .put(isLoggedIn, asyncValidatorController(checkSchema(postValidator)), putPostController)

// GET all posts from a Profile Id
router.route('/postProfileId/:postProfileId')
    .get(isLoggedIn, asyncValidatorController([check('postProfileId', 'please provide a valid postProfileId').isUUID()]), getPostsByPostProfileIdController)
    .put(isLoggedIn, asyncValidatorController(checkSchema(postValidator)))

// GETs all public published posts, and POST a new POST
router.route('/')
    .get(getPostsByPostIsPublishedController)
    .post(isLoggedIn, asyncValidatorController(checkSchema((postValidator))), postPost)

// GETs all posts that a Profile non-anonymously shared
router.route('/postProfileId/:postProfileId/postProfileHandleIsVisible/true/')
    .get(asyncValidatorController([check('postProfileId', 'please provide a valid postProfileId').isUUID()]), getPostsByPostProfileHandleIsVisibleController)

// GETs all posts under a post-category
router.route('/postCategoryId/:postCategoryId')
    .get(asyncValidatorController([check('postCategoryId').isUUID()]), getAllPostsByPostCategoryIdController)
export default router
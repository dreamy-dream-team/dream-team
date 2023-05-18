import {getVotesByVotePostId, toggleVoteController} from "./vote.controller";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {Router} from "express";

const router = Router()

router.route('/').post(isLoggedIn, toggleVoteController)

router.route('votePostId/:votePostId').get(asyncValidatorController([check('votePostId', 'please provide a valid votePostId').isUUID()]), getVotesByVotePostId)

export default router
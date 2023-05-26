import {getVoteByPrimaryKeyController, getVotesByVotePostId, toggleVoteController} from "./vote.controller";
import { asyncValidatorController } from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import { isLoggedIn } from "../../utils/controllers/isLoggedIn.controller";
import { Router } from "express";
import {voteValidator} from "./vote.validator";

const router = Router()

// casts Vote to a Post
router.route('/')
    .post(isLoggedIn, asyncValidatorController (checkSchema(voteValidator)), toggleVoteController)

// gets votes to a postId
router.route('/votePostId/:votePostId')
    .get(asyncValidatorController([check('votePostId', 'please provide a valid votePostId').isUUID()]), getVotesByVotePostId)

// gets votes from the primary key of vote (profile/post)
router.route('/voteProfileId/:voteProfileId/votePostId/:votePostId')
    .get(asyncValidatorController([
    check('voteProfileId', 'please provide a valid voteProfileId').isUUID(),
    check('votePostId', 'please provide a valid votePostId').isUUID()
]), getVoteByPrimaryKeyController)

export default router
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {checkSchema, param} from "express-validator";
import {signupProfileController} from "./sign-up.controller"
import {signupValidator} from "./sign-up.validator";

const router: Router = Router()

router.route('/')
    .post(asyncValidatorController(checkSchema(signupValidator)),signupProfileController)

// router.route('/activation/:activation')
//     .get(
//         asyncValidatorController([param('activation', 'invalid activation link').isHexadecimal().notEmpty()]),
//         activationController)

export default router
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {checkSchema} from "express-validator";
import {signInValidator} from "./sign-in.validator";
import {signInController} from "./sign-in.controller";

export const SignInRouter: Router = Router()

SignInRouter.route('/')
.post(asyncValidatorController(checkSchema(signInValidator)), signInController)
import { Router } from "express";
import { confirmUser, createUser, login } from "../controllers/auth.controller.js";
import { isUnimayor } from "../helpers/is-unimayor-email.js";
import { isSecurePassword } from "../helpers/is-secure-password.js";
import { checkValidationResult } from "../middlewares/check-validation-result.js";
import { check } from "express-validator";

const authRouter = Router();



authRouter.post('/register', [
    
    check('username', 'Username must be more than 5 characters ')
        .isLength({ min: 5, max: 50 }),

    check('email', 'You must be a Unimayor student')
        .custom(isUnimayor),

    check('password', 'password should contain atleast one number and one special character')
        .not().isEmpty()
        .custom(isSecurePassword),

    checkValidationResult

], createUser);

authRouter.post('login', [
    check('email').custom(isUnimayor),
    check('password').not().isEmpty(),
    checkValidationResult
],login);

authRouter.get('/verify/:token', confirmUser);

export default authRouter;
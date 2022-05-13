import { Router } from "express";
import {signUpUser} from "../controllers/signUpUser.js";
import validateSignUp from "../middlewares/validateSignUp.js";

const signUpRouter = Router();

signUpRouter.post('/sign-up', validateSignUp, signUpUser);

export default signUpRouter;
import { Router } from "express";
import {signUpUser} from "../controllers/signUpUser.js";

const signUpRouter = Router();

signUpRouter.post('/sign-up', signUpUser);

export default signUpRouter;
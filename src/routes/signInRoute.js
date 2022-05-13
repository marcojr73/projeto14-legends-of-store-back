import { Router } from "express";
import signInUser from "../controllers/signInUser.js";
import validateData from "../middlewares/validateData.js";
import validatePassword from "../middlewares/validatePassword.js";
import validateUser from "../middlewares/validateUser.js";

const sigInRouter = Router();

sigInRouter.post('/sign-in',validateData, validateUser, validatePassword, signInUser);

export default sigInRouter;
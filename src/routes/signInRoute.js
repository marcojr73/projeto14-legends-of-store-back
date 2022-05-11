import { Router } from "express";
import signIn from "../controllers/signIn.js";

const sigInRouter = Router();

sigInRouter.post('/sign-in', signIn);

export default sigInRouter;
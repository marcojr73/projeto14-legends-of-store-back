import { Router } from "express";
import purchase from "../controllers/purchase.js";
import validateToken from "../middlewares/validateToken.js";
import validateUser from "../middlewares/validateUser.js";

const purchaseRouter = Router();

purchaseRouter.post('/purchase', validateToken, validateUser, purchase);

export default purchaseRouter;
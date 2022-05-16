import { Router } from "express";
import purchase from "../controllers/purchase.js";
import validateToken from "../middlewares/validateToken.js";

const purchaseRouter = Router();

purchaseRouter.post('/purchase', validateToken, purchase);

export default purchaseRouter;
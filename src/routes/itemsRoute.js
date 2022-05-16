import { Router } from "express";
import allItems from "../controllers/items.js";
import validateToken from "../middlewares/validateToken.js";

const itemsRouter = Router();

itemsRouter.get('/items', validateToken, allItems);

export default itemsRouter;
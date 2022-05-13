import { Router } from "express";
import allItems from "../controllers/items.js";

const itemsRouter = Router();

itemsRouter.get('/items', allItems);

export default itemsRouter;
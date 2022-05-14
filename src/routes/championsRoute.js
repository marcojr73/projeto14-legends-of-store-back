import { Router } from "express";
import getChampions from "../controllers/getChampions.js";

const championsRouter = Router();

championsRouter.get('/champions', getChampions);

export default championsRouter;
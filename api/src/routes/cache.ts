import { Router } from "express";
import { postCache } from "../config/node-cache";

export const cacheRouter = Router();

cacheRouter.delete("/", (req, res) => {
  postCache.flushAll();
});

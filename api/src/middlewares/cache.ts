import { NextFunction, Request, Response } from "express";
import { postCache } from "../config/node-cache";
import { stopTimer } from "../utils/stopTimer";

export const cacheMiddleware =
  (cacheType?: string) => (req: Request, res: Response, next: NextFunction) => {
    const typeToGet = cacheType === "allPosts" ? cacheType : `${req.params.id}`;
    const cachedData = postCache.get(typeToGet);

    if (cachedData) {
      const { startTime } = res.locals;
      return res.json({
        isCached: true,
        responseTime: stopTimer(startTime),
        data: cachedData,
      });
    }

    next();
  };

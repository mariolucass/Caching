import { NextFunction, Request, Response } from "express";

export const startTime = (req: Request, res: Response, next: NextFunction) => {
  const startTime = process.hrtime.bigint();
  res.locals.startTime = startTime;
  next();
};

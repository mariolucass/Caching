import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const validateSchema =
  (schema: ZodTypeAny) => (req: Request, _: Response, next: NextFunction) => {
    const bodyValidated = schema.parse(req.body);
    req.body = bodyValidated;
    return next();
  };

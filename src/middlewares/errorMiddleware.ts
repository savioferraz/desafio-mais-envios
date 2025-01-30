import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  const status = err.status || httpStatus.INTERNAL_SERVER_ERROR;
  const message = err.message || "Erro interno do servidor";

  res.status(status).json(message);
};

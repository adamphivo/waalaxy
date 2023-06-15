import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const errorMiddleware: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const message = err.message;

  return res.status(500).send({ error: { message } });
};

export default errorMiddleware;

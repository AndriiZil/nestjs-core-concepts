import { Request, Response, NextFunction } from 'express';

export function simpleMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('Middleware applied');
  next();
}

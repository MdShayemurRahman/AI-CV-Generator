import { NextFunction, Request, Response } from 'express';
import { monitorRequest } from './logging';

export function routeNotFound(req: Request, res: Response, next: NextFunction) {
  const paths = /^(\/personal|\/skills|\/education|\/reference)/;
  if (!paths.test(req.originalUrl)) {
    res.status(404).json({ msg: 'Route not found' });
    monitorRequest(req, res, next, true);
  } else {
    next(); 
  }
}

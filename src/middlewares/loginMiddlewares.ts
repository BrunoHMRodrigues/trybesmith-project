import { Request, Response, NextFunction } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const verifyRequestData = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(mapStatusHTTP('NOT_FOUND'))
      .json({ message: '"username" and "password" are required' });
  }
  
  next();
};

export default {
  verifyRequestData,
};
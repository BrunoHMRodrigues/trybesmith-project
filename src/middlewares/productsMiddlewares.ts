import { Request, Response, NextFunction } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const verifyProductName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) {
    return res.status(mapStatusHTTP('NOT_FOUND'))
      .json({ message: '"name" is required' });
  }

  if (typeof name !== 'string') {
    return res.status(mapStatusHTTP('RULE_INVALID'))
      .json({ message: '"name" must be a string' });
  }
  
  if (name.length <= 2) {
    return res.status(mapStatusHTTP('RULE_INVALID'))
      .json({ message: '"name" length must be at least 3 characters long' });
  }
  
  next();
};

const verifyProductPrice = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body;

  if (!price) {
    return res.status(mapStatusHTTP('NOT_FOUND'))
      .json({ message: '"price" is required' });
  }

  if (typeof price !== 'string') {
    return res.status(mapStatusHTTP('RULE_INVALID'))
      .json({ message: '"price" must be a string' });
  }
  
  if (price.length <= 2) {
    return res.status(mapStatusHTTP('RULE_INVALID'))
      .json({ message: '"price" length must be at least 3 characters long' });
  }
  
  next();
};

export default {
  verifyProductName,
  verifyProductPrice,
};
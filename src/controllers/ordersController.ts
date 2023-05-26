import { Request, Response } from 'express';
import ordersService from '../services/ordersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function getAllOrders(req: Request, res: Response): Promise<Response> {
  const result = await ordersService.getAllOrders();

  return res.status(mapStatusHTTP(result.status)).json(result.data);
}

export default { 
  getAllOrders,
};
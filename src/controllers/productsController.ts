import { Request, Response } from 'express';
import productsService from '../services/productsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function registerProduct(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;
  const result = await productsService.createProduct({ name, price, orderId });

  return res.status(mapStatusHTTP(result.status)).json(result.data);
}

async function getAllProducts(req: Request, res: Response): Promise<Response> {
  const result = await productsService.getAllProducts();

  return res.status(mapStatusHTTP(result.status)).json(result.data);
}

export default { 
  registerProduct,
  getAllProducts,
};
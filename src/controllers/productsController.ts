import { Request, Response } from 'express';
import productsService from '../services/productsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

// const controllerProducts = async (req: Request, res: Response) => {
//   const productData = req.body;
//   const result = await productsService.createProduct(productData);

//   return res.status(result.status).json(result.data);
// };

async function registerProduct(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;
  const result = await productsService.createProduct({ name, price, orderId });

  return res.status(mapStatusHTTP(result.status)).json(result.data);
}

// export default controllerProducts;
export default { 
  registerProduct, 
};
import { Router } from 'express';
import productsController from '../controllers/productsController';

const productRouter = Router();

productRouter.post('/products', productsController.registerProduct);

export default productRouter;
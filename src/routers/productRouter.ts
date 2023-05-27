import { Router } from 'express';
import productsMiddlewares from '../middlewares/productsMiddlewares';
import productsController from '../controllers/productsController';

const { verifyProductName, verifyProductPrice } = productsMiddlewares;

const productRouter = Router();
productRouter.post('/', verifyProductName, verifyProductPrice, productsController.registerProduct);

productRouter.get('/', productsController.getAllProducts);

export default productRouter;
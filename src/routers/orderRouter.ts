import { Router } from 'express';
import ordersController from '../controllers/ordersController';

const orderRouter = Router();

orderRouter.get('/', ordersController.getAllOrders);

export default orderRouter;
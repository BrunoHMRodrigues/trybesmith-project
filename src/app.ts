import express from 'express';
import routers from './routers';
// import orderRouter from './routers/orderRouter';
// import productRouter from './routers/productRouter';
const { productRouter, orderRouter } = routers;

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/orders', orderRouter);

export default app;
